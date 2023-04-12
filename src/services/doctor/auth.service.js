const bcrypt = require("bcryptjs");
const { Doctor, Token } = require("../../models");
const {
  USER_TYPE,
  STATUS_CODES,
  ERROR_MESSAGES,
} = require("../../config/appConstants");
const { AuthFailedError } = require("../../utils/errors");

exports.createDoctor = async (userData, doc) => {
  const data = await Doctor.findOne({
    email: userData.email,
    isDeleted: false,
  });

  if (data) {
    throw new AuthFailedError(
      ERROR_MESSAGES.EMAIL_ALREADY_EXIST,
      STATUS_CODES.ACTION_FAILED
    );
  }

  const documentName = doc.map((data) => data.filename);
  console.log(documentName, "doccccc");
  let password = await bcrypt.hash(userData.password, 8);
  const doctor = await Doctor.create({
    name: userData.name,
    password,
    email: userData.email,
    // document: documentName,
  });
  return doctor;
};

exports.userLogin = async (email, password) => {
  let doctor = await Doctor.findOne({ email: email, isDeleted: false }).lean();
  if (!doctor) {
    throw new AuthFailedError(
      ERROR_MESSAGES.EMAIL_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
  if (!(await bcrypt.compare(password, doctor.password))) {
    throw new AuthFailedError(
      ERROR_MESSAGES.WRONG_PASSWORD,
      STATUS_CODES.AUTH_FAILED
    );
  }
  return doctor;
};

exports.getUserById = async (userId) => {
  const user = await User.findById(userId).lean();

  if (!user) {
    throw new OperationalError(
      STATUS_CODES.NOT_FOUND,
      ERROR_MESSAGES.USER_NOT_FOUND
    );
  }

  return user;
};

exports.logout = async (tokenId) => {
  const token = await Token.findOneAndUpdate(
    { _id: tokenId, isDeleted: false },
    {
      $set: { isDeleted: true },
    },
    { new: true, lean: 1 }
  );

  if (!token) {
    throw new AuthFailedError(
      ERROR_MESSAGES.AUTHENTICATION_FAILED,
      STATUS_CODES.ACTION_FAILED
    );
  }
  return token;
};

exports.resetPassword = async (tokenData, newPassword) => {
  let query = tokenData.doctor;

  newPassword = await bcrypt.hash(newPassword, 8);
  if (tokenData.role === USER_TYPE.DOCTOR) {
    const userdata = await Doctor.findOneAndUpdate(
      { _id: query },
      { $set: { password: newPassword } }
    );
    const tokenvalue = await Token.findByIdAndUpdate(tokenData._id, {
      isDeleted: true,
    });
    return { userdata, tokenvalue };
  }
  const tokenvalue = await Token.findByIdAndUpdate(tokenData._id, {
    isDeleted: true,
  });

  return { tokenvalue, adminvalue };
};

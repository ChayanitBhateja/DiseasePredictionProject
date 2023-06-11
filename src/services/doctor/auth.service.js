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
  let password = await bcrypt.hash(userData.password, 8);
  const doctor = await Doctor.create({
    name: userData.name,
    password,
    email: userData.email,
    specialist: userData.specialist,
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
  const user = await Doctor.findById(userId).lean();

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

exports.delete = async (doctorId) => {
  const doctor = await Doctor.findByIdAndUpdate(
    doctorId,
    {
      $set: { isDeleted: true },
    },
    { new: true, lean: 1 }
  );
  if (!doctor) {
    throw new AuthFailedError(
      ERROR_MESSAGES.DOCTOR_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
};

exports.resetPassword = async (
  userId,
  newPassword,
  confirmPassword,
  tokenId
) => {
  if (newPassword !== confirmPassword) {
    throw new AuthFailedError(
      ERROR_MESSAGES.CONFIRM_PASSWORD,
      STATUS_CODES.ACTION_FAILED
    );
  }
  let updatedPassword = await bcrypt.hash(newPassword, 8);
  const user = await Doctor.findByIdAndUpdate(userId, {
    $set: { password: updatedPassword },
  });
  await Token.deleteOne({ _id: tokenId });
  return user;
};

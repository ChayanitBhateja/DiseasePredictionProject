const bcrypt = require("bcryptjs");
const { User, Token, Admin, Doctor } = require("../../models");
const {
  USER_TYPE,
  STATUS_CODES,
  ERROR_MESSAGES,
} = require("../../config/appConstants");
const { AuthFailedError } = require("../../utils/errors");

exports.createUser = async (userData) => {
  const data = await User.findOne({
    email: userData.email,
    isDeleted: false,
  });
  if (data) {
    throw new AuthFailedError(
      ERROR_MESSAGES.EMAIL_ALREADY_EXIST,
      STATUS_CODES.ACTION_FAILED
    );
  }
  const user = await User.create(userData);
  return user;
};

exports.userLogin = async (email, password) => {
  let user = await User.findOne({
    email: email,
    isDeleted: false,
    isBlocked: false,
  });
  if (!user) {
    throw new AuthFailedError(
      ERROR_MESSAGES.EMAIL_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
  if (!(await bcrypt.compare(password, user.password))) {
    throw new AuthFailedError(
      ERROR_MESSAGES.WRONG_PASSWORD,
      STATUS_CODES.AUTH_FAILED
    );
  }
  return user;
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

exports.resetPassword = async (tokenData, newPassword) => {
  let query = tokenData.user;
  newPassword = await bcrypt.hash(newPassword, 8);
  if (tokenData.role === USER_TYPE.USER) {
    const userdata = await User.findOneAndUpdate(
      { _id: query },
      { $set: { password: newPassword } }
    );
    const tokenvalue = await Token.findByIdAndUpdate(tokenData._id, {
      isDeleted: true,
    });
    return { userdata, tokenvalue };
  } else if (tokenData.role === USER_TYPE.ADMIN) {
    const adminvalue = await Admin.findOneAndUpdate(
      { _id: query },
      { $set: { password: newPassword } }
    );
    const tokenvalue = await Token.findByIdAndUpdate(tokenData._id, {
      isDeleted: true,
    });
  } else {
    const doctorValue = await Doctor.findOneAndUpdate(
      { _id: query },
      { $set: { password: newPassword } }
    );
    const tokenvalue = await Token.findByIdAndUpdate(tokenData._id, {
      isDeleted: true,
    });
  }

  return { tokenvalue };
};
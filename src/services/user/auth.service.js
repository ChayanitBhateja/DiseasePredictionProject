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
  userData.password = await bcrypt.hash(userData.password, 8);
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

exports.changePassword = async (oldPassword, newPassword, userId) => {
  let user = await User.findById(userId).lean();
  if (!(await bcrypt.compare(oldPassword, user.password))) {
    throw new AuthFailedError(
      ERROR_MESSAGES.WRONG_PASSWORD,
      STATUS_CODES.AUTH_FAILED
    );
  }
  let newPass = await bcrypt.hash(newPassword, 8);
  user = await User.findOneAndUpdate(
    { _id: userId, isDeleted: false },
    { $set: { password: newPass } },
    { new: true, lean: 1 }
  );
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
  const user = await User.findByIdAndUpdate(userId, {
    $set: { password: updatedPassword },
  });
  await Token.deleteOne({ _id: tokenId });
  return user;
};

exports.delete = async (userId) => {
  const user = await User.findByIdAndUpdate(
    userId,
    {
      $set: { isDeleted: true },
    },
    { new: true, lean: 1 }
  );
  if (!user) {
    throw new AuthFailedError(
      ERROR_MESSAGES.USER_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
  return user;
};

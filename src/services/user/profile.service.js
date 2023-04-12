const { User } = require("../../models");
const { STATUS_CODES, ERROR_MESSAGES } = require("../../config/appConstants");
const { AuthFailedError } = require("../../utils/errors");
const bcrypt = require("bcryptjs");

exports.editProfile = async (userId, data) => {
  const user = await User.findOneAndUpdate(
    { _id: userId, isDeleted: false },
    {
      $set: { name: data.name, email: data.email, profilePic: data.profilePic },
    },
    { lean: 1, new: true }
  ).lean();
  if (!user) {
    throw new AuthFailedError(
      ERROR_MESSAGES.USER_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
};

exports.changePassword = async (oldPass, newPass, userId) => {
  let user = await User.findOne({ _id: userId }).lean();
  if (!user) {
    throw new AuthFailedError(
      ERROR_MESSAGES.USER_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
  if (!(await bcrypt.compare(oldPass, user.password))) {
    throw new AuthFailedError(
      ERROR_MESSAGES.WRONG_PASSWORD,
      STATUS_CODES.AUTH_FAILED
    );
  }
  newPass = await bcrypt.hash(newPass, 8);
  user = await User.findOneAndUpdate(
    { _id: userId },
    {
      $set: { password: newPass },
    },
    { new: true }
  ).lean();

  return user;
};

exports.deleteUser = async (user) => {
  const data = await User.findOneAndUpdate(
    {
      _id: user,
      isDeleted: false,
    },
    { $set: { isDeleted: true } },
    { new: true, lean: 1 }
  ).lean();
  if (!data) {
    throw new AuthFailedError(
      ERROR_MESSAGES.USER_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
};

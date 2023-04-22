const { User } = require("../../models");
const { STATUS_CODES, ERROR_MESSAGES } = require("../../config/appConstants");
const { AuthFailedError } = require("../../utils/errors");
const bcrypt = require("bcryptjs");

exports.getProfile = async (userId) => {
  const user = await User.findById(userId).lean();
  if (!user) {
    throw new AuthFailedError(
      ERROR_MESSAGES.USER_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
  return user;
};

exports.editProfile = async (userId, data, file) => {
  let value = {
    name: data.name,
  };
  if (data.email) {
    value.email = data.email;
  }
  if (file) {
    value.profilePic = file.path.substring(7);
  }
  const user = await User.findOneAndUpdate(
    { _id: userId, isDeleted: false },
    {
      $set: value,
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

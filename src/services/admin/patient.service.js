const { Admin, Token, User, Doctor } = require("../../models");
const { STATUS_CODES, ERROR_MESSAGES } = require("../../config/appConstants");
const { AuthFailedError } = require("../../utils/errors");

exports.getPatients = async () => {
  const users = await User.find({ isDeleted: false }).lean();
  return users;
};

exports.detail = async (patienId) => {
  const user = await User.findOne({ _id: patienId, isDeleted: false }).lean();
  if (!user) {
    throw new AuthFailedError(
      ERROR_MESSAGES.USER_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
  return user;
};

const { successResponse } = require("../../utils/response");
const { User, Doctor } = require("../../models");
const { ApiError } = require("../../utils/universalFunction");
const {
  joi,
  USER_TYPE,
  STATUS_CODES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
} = require("../../config/appConstants");
const { OperationalError } = require("../../utils/errors");
const config = require("../../config/config");
const bcrypt = require("bcryptjs");
const moment = require("moment");

const getAll = async (user) => {
  const doctor = await Doctor.find({ isVerified: true, isDeleted: false }).lean();

  if (!doctor) {
    throw new OperationalError(
      STATUS_CODES.NOT_FOUND,
      ERROR_MESSAGES.DATA_NOT_EXISTS
    );
  }

  return doctor;
};

module.exports = {
  getAll,
};

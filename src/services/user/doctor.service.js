const { User, Doctor } = require("../../models");
const {
  STATUS_CODES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
} = require("../../config/appConstants");
const { AuthFailedError } = require("../../utils/errors");

exports.getAll = async (user) => {
  const doctor = await Doctor.find({
    isDeleted: false,
  }).lean();

  return doctor;
};

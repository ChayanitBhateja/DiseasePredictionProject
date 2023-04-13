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

exports.consult = async (userId, doctorId) => {
  const doctor = await Doctor.findOneAndUpdate(
    {
      _id: doctorId,
      isDeleted: false,
    },
    { $addToSet: { patientRequest: userId } },
    { new: true, lean: 1 }
  );
  if (!doctor) {
    throw new AuthFailedError(
      ERROR_MESSAGES.DOCTOR_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
};

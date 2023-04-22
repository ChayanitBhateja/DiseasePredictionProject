const { User, Doctor } = require("../../models");
const {
  STATUS_CODES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
} = require("../../config/appConstants");
const { AuthFailedError } = require("../../utils/errors");

exports.getAll = async (query) => {
  let doctor = await Doctor.find({
    isDeleted: false,
  })
    .lean()
    .skip(query.page * query.limit)
    .limit(query.limit);
  if (query.search) {
    doctor = doctor.filter((d) =>
      JSON.stringify(d.name.toLowerCase()).includes(query.search.toLowerCase())
    );
  }
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

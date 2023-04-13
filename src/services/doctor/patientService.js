const { Doctor, User } = require("../../models");
const { STATUS_CODES, ERROR_MESSAGES } = require("../../config/appConstants");
const { AuthFailedError } = require("../../utils/errors");

exports.list = async (doctorId) => {
  let doctor = await Doctor.findById(doctorId)
    .lean()
    .select("patients")
    .populate({ path: "patients" });
  doctor.patients = doctor.patients.filter((p) => !p.isDeleted);
  return doctor;
};

exports.patientRequests = async (doctorId) => {
  let doctor = await Doctor.findById(doctorId)
    .lean()
    .select("patientRequest")
    .populate({ path: "patientRequest" });
  doctor.patientRequest = doctor.patientRequest.filter((p) => !p.isDeleted);
  return doctor;
};

exports.response = async (doctorId, body) => {
  if (body.response === "accept") {
    const doctor = await Doctor.findByIdAndUpdate(
      doctorId,
      {
        $pull: { patientRequest: body.patientId },
        $addToSet: { patients: body.patientId },
      },
      { new: true, lean: 1 }
    );
    let user = await User.findOneAndUpdate(
      { _id: body.patientId, isDeleted: false },
      { $set: { doctor: doctor._id } },
      { new: true, lean: 1 }
    );
    if (!user) {
      throw new AuthFailedError(
        ERROR_MESSAGES.USER_NOT_FOUND,
        STATUS_CODES.ACTION_FAILED
      );
    }
  } else {
    const doctor = await Doctor.findByIdAndUpdate(
      doctorId,
      {
        $pull: { patientRequest: body.patientId },
      },
      { new: true, lean: 1 }
    );
  }
};

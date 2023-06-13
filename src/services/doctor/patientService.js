const { Doctor, User } = require("../../models");
const { STATUS_CODES, ERROR_MESSAGES } = require("../../config/appConstants");
const { AuthFailedError } = require("../../utils/errors");
const open = require("opn");
const axios = require("axios");
exports.list = async (doctorId, query) => {
  const patients = await Doctor.findById(doctorId).lean();
  let doctor = await Doctor.findById(doctorId)
    .lean()
    .select("patients")
    .populate({
      path: "patients",
      options: { skip: query.page * query.limit, limit: query.limit },
    });
  doctor.patients = doctor.patients.filter((p) => !p.isDeleted);
  const totalPatients = await User.countDocuments({ isDeleted: false });
  if (query.search) {
    doctor.patients = doctor.patients.filter(
      (p) =>
        JSON.stringify(p.name.toLowerCase()).includes(
          query.search.toLowerCase()
        ) ||
        JSON.stringify(p.email.toLowerCase()).includes(
          query.search.toLowerCase()
        )
    );
  }
  return { doctor, count: patients.patients.length, totalPatients };
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

exports.remove = async (doctorId, patienId) => {
  const doctor = await Doctor.findByIdAndUpdate(
    doctorId,
    { $pull: { patients: patienId } },
    { new: 1, lean: 1 }
  );

  const user = await User.findByIdAndUpdate(patienId, {
    $unset: { doctor: "" },
  });

  return user;
};

exports.predict = async (url) => {
  try {
    console.log();
    const swaggerUrl = `http://127.0.01:8000/get_prediction?${
      url.split("?")[1]
    }`;
    const response = await axios.get(swaggerUrl);
    console.log(response.data["prediction"], "response");
    return response.data["prediction"];
  } catch (err) {
    throw new AuthFailedError(err, STATUS_CODES.ACTION_FAILED);
  }
};

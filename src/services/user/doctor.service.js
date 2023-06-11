const { User, Doctor } = require("../../models");
const {
  STATUS_CODES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
} = require("../../config/appConstants");
const { AuthFailedError } = require("../../utils/errors");

exports.getAll = async (query, token) => {
  let doctor = await Doctor.find({
    isDeleted: false,
  })
    .lean()
    .skip(query.page * query.limit)
    .limit(query.limit);
  const count = await Doctor.countDocuments({ isDeleted: false })

  if (query.search) {
    doctor = doctor.filter((d) =>
      JSON.stringify(d.name.toLowerCase()).includes(query.search.toLowerCase()) ||
      JSON.stringify(d.email.toLowerCase()).includes(query.search.toLowerCase())
    );
  }
  doctor.map((i) => {
    if (JSON.stringify(i.patients).includes(JSON.stringify(token.user._id))) {
      i.accepted = true
    } else {
      i.accepted = false
    }
  })
  return { doctor, count };
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

exports.remove = async (userId, doctorId) => {
  const user = await User.findByIdAndUpdate(
    userId,
    { $unset: { doctor: "" } },
    { new: 1, lean: 1 }
  );

  const doctor = await Doctor.findByIdAndUpdate(doctorId, {
    $pull: { patients: user._id },
  });

  return user;
};

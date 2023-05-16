const { Admin, Doctor } = require("../../models");
const { STATUS_CODES, ERROR_MESSAGES } = require("../../config/appConstants");
const { OperationalError, AuthFailedError } = require("../../utils/errors");
const { paginationOptions } = require("../../utils/universalFunction");

const adminViewDoctor = async (data) => {
  let query = { isDeleted: false };
  if (data.search) {
    let searchRegex = RegExp(data.search, "i");

    query = {
      ...query,
      $or: [
        { name: { $regex: searchRegex } },
        { email: { $regex: searchRegex } },
      ],
    };
  }
  const [doctor, count] = await Promise.all([
    Doctor.find(query, {}, paginationOptions(data.page, data.limit)).lean(),
    Doctor.countDocuments(query),
  ]);

  return { doctor, count };
};

const doctorDetails = async (data) => {
  const doctor = await Doctor.findOne({
    _id: data.id,
    isDeleted: false,
  }).lean();

  if (!doctor) {
    throw new OperationalError(
      STATUS_CODES.NOT_FOUND,
      ERROR_MESSAGES.DATA_NOT_EXISTS
    );
  }

  return doctor;
};

const adminApproveDoctor = async (data) => {
  console.log(data);
  const doctor = await Doctor.findOne({ _id: data.id }).lean();

  if (!doctor) {
    throw new OperationalError(
      STATUS_CODES.NOT_FOUND,
      ERROR_MESSAGES.DATA_NOT_EXISTS
    );
  }

  await Doctor.findOneAndUpdate(
    { _id: data.id },
    {
      isVerified: true,
    },
    { new: true }
  );

  return doctor;
};

const toggle = async (body) => {
  let response = body.toggle === 0 ? false : true;
  const doctor = await Doctor.findOneAndUpdate(
    { _id: body.id, isDeleted: false },
    { $set: { isBlocked: response } },
    { new: true, lean: 1 }
  );
  if (!doctor) {
    throw new AuthFailedError(
      ERROR_MESSAGES.DOCTOR_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
};

const deleteDoctor = async (doctorId) => {
  const doctor = await Doctor.findOneAndUpdate(
    { _id: doctorId, isDeleted: false },
    { $set: { isDeleted: true } },
    { new: 1, lean: 1 }
  );
  if (!doctor) {
    throw new AuthFailedError(
      ERROR_MESSAGES.DOCTOR_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
};

module.exports = {
  adminViewDoctor,
  doctorDetails,
  adminApproveDoctor,
  toggle,
  deleteDoctor,
};

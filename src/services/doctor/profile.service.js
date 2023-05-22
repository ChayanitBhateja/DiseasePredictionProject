const { successResponse } = require("../../utils/response");
const { Doctor } = require("../../models");
const {
  USER_TYPE,
  STATUS_CODES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
} = require("../../config/appConstants");
const { AuthFailedError } = require("../../utils/errors");
const bcrypt = require("bcryptjs");

exports.getProfile = async (doctorId) => {
  const doctor = await Doctor.findById(doctorId).lean();
  if (!doctor) {
    throw new AuthFailedError(
      ERROR_MESSAGES.DOCTOR_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
  return doctor;
};

exports.upload = async (doctorId, file) => {
  const doctor = await Doctor.findByIdAndUpdate(
    doctorId,
    {
      $push: { documents: file.path.substring(7) },
    },
    { new: 1, lean: 1 }
  );
  return doctor;
};

exports.editProfile = async (doctorId, data, file) => {
  let value = {
    name: data.name,
  };
  if (data.email) {
    value.email = data.email;
  }
  if (file) {
    value.profilePic = file.path.substring(7);
  }
  const user = await Doctor.findOneAndUpdate(
    {
      _id: doctorId,
      isDeleted: false,
    },
    {
      $set: value,
    },
    { new: true, lean: 1 }
  ).lean();
  if (!user) {
    throw new AuthFailedError(
      ERROR_MESSAGES.USER_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
};

exports.changePassword = async (doctorId, oldPassword, newPassword) => {
  let doctor = await Doctor.findOne({ _id: doctorId }).lean();
  if (!doctor) {
    throw new AuthFailedError(
      ERROR_MESSAGES.USER_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
  if (!(await bcrypt.compare(oldPassword, doctor.password))) {
    throw new AuthFailedError(
      ERROR_MESSAGES.WRONG_PASSWORD,
      STATUS_CODES.AUTH_FAILED
    );
  }
  newPass = await bcrypt.hash(newPassword, 8);
  doctor = await Doctor.findOneAndUpdate(
    { _id: doctorId },
    {
      $set: { password: newPass },
    },
    { new: true }
  ).lean();

  return doctor;
};

exports.deleteUser = async (doctor) => {
  const data = await Doctor.findOneAndUpdate(
    {
      _id: doctor,
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

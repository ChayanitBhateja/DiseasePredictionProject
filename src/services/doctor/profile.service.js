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

exports.editProfile = async (doctorId, data) => {
  const user = await Doctor.findOneAndUpdate(
    {
      _id: doctorId,
      isDeleted: false,
    },
    {
      $set: {
        name: data.userName,
        email: data.email,
        profilePic: data.profilePic,
      },
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
  if (!(await bcrypt.compare(oldPass, doctor.password))) {
    throw new AuthFailedError(
      ERROR_MESSAGES.WRONG_PASSWORD,
      STATUS_CODES.AUTH_FAILED
    );
  }
  newPass = await bcrypt.hash(newPass, 8);
  user = await User.findOneAndUpdate(
    { _id: userId },
    {
      $set: { password: newPass },
    },
    { new: true }
  ).lean();

  return user;
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

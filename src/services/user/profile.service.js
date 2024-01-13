const { User } = require("../../models");
const { STATUS_CODES, ERROR_MESSAGES } = require("../../config/appConstants");
const { AuthFailedError } = require("../../utils/errors");
const bcrypt = require("bcryptjs");
const axios = require("axios");

exports.getProfile = async (userId) => {
  const user = await User.findById(userId).lean();
  if (!user) {
    throw new AuthFailedError(
      ERROR_MESSAGES.USER_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
  return user;
};

exports.getProfileByEmail = async (email) => {
  const user = await User.findOne({
    email: email,
    isDeleted: false,
  }).lean();

  if (!user) {
    throw new AuthFailedError(
      ERROR_MESSAGES.USER_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
  return user;
};

exports.upload = async (userId, file) => {
  const user = await User.findByIdAndUpdate(
    userId,
    {
      $push: { reports: file.path.substring(7) },
    },
    { new: 1, lean: 1 }
  );
  return user;
};

exports.editProfile = async (userId, data, file) => {
  let value = {
    name: data.name,
  };
  if (data.email) {
    value.email = data.email;
  }
  if (file) {
    value.profilePic = file.path.substring(7);
  }
  console.log(file, "filleeeeee");
  const user = await User.findOneAndUpdate(
    { _id: userId, isDeleted: false },
    {
      $set: value,
    },
    { lean: 1, new: true }
  ).lean();
  if (!user) {
    throw new AuthFailedError(
      ERROR_MESSAGES.USER_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
};

exports.getInteractivePlot = async () => {
  try {
    const swaggerUrl = `http://127.0.0.1:8000/interactive_plot`;
    const response = await axios.get(swaggerUrl);
    return JSON.parse(response.data);
  } catch (err) {
    throw new AuthFailedError(err, STATUS_CODES.ACTION_FAILED);
  }
};

exports.getKpi = async () => {
  try {
    const swaggerUrl = `http://127.0.0.1:8000/kpis`;
    const response = await axios.get(swaggerUrl);
    return response.data;
  } catch (err) {
    throw new AuthFailedError(err, STATUS_CODES.ACTION_FAILED);
  }
};

exports.changePassword = async (oldPass, newPass, userId) => {
  let user = await User.findOne({ _id: userId }).lean();
  if (!user) {
    throw new AuthFailedError(
      ERROR_MESSAGES.USER_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
  if (!(await bcrypt.compare(oldPass, user.password))) {
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

exports.deleteUser = async (user) => {
  const data = await User.findOneAndUpdate(
    {
      _id: user,
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

exports.deleteDocuments = async (userId, reports) => {
  const user = await User.findByIdAndUpdate(
    userId,
    { $set: reports },
    { new: 1, lean: 1 }
  );

  return user;
};

const jwt = require("jsonwebtoken");
const moment = require("moment");
var ObjectID = require("mongodb").ObjectId;
const config = require("../config/config");
const {
  TOKEN_TYPE,
  USER_TYPE,
  STATUS_CODES,
  ERROR_MESSAGES,
} = require("../config/appConstants");
const { Token, Admin, User, Doctor } = require("../models");
const { OperationalError, AuthFailedError } = require("../utils/errors");
const profileService = require("./user/profile.service");
const doctorService = require("./doctor/profile.service");
const { adminService } = require(".");

const generateToken = (data, secret = config.jwt.secret) => {
  const payload = {
    user: data.user,
    exp: data.tokenExpires.unix(),
    type: data.tokenType,
    id: data.tokenId,
    role: data.userType,
  };

  return jwt.sign(payload, secret);
};

const saveToken = async (data) => {
  let dataToBesaved = {
    expires: data.tokenExpires.toDate(),
    type: data.tokenType,
    _id: data.tokenId,
    device: { type: data.deviceType, token: data.deviceToken },
    role: data.userType,
    token: data.token,
  };

  if (data.userType === USER_TYPE.DOCTOR) {
    dataToBesaved.doctor = data.user._id;
  }
  if (data.userType === USER_TYPE.ADMIN) {
    dataToBesaved.admin = data.user._id;
  }
  if (data.userType === USER_TYPE.USER) {
    dataToBesaved.user = data.user._id;
  }

  const tokenDoc = await Token.create(dataToBesaved);
  return tokenDoc;
};

const generateAuthToken = async (user, userType, deviceToken, deviceType) => {
  const tokenExpires = moment().add(config.jwt.accessExpirationMinutes, "days");
  var tokenId = new ObjectID();
  const accessToken = generateToken({
    // user: user._id,
    tokenExpires,
    tokenType: TOKEN_TYPE.ACCESS,
    userType,
    tokenId,
  });

  await saveToken({
    token: accessToken,
    tokenExpires,
    tokenId,
    deviceToken,
    deviceType,
    tokentype: TOKEN_TYPE.ACCESS,
    userType,
    user,
  });

  return {
    token: accessToken,
    expires: tokenExpires.toDate(),
  };
};

const adminverifyToken = async (tokenData, admintype) => {
  const payload = jwt.verify(tokenData.token, config.jwt.secret);
  const tokenDoc = await Token.findOne({
    tokenData,
    isDeleted: false,
    role: admintype,
  });
  if (!tokenDoc) {
    throw new Error("Token not found");
  }
  return tokenDoc;
};

const refreshAuth = async (user, userType, tokenId) => {
  await Token.findByIdAndUpdate(tokenId, { isDeleted: true });
  return generateAuthToken(user, userType);
};

const logout = async (tokenId) => {
  const token = await Token.findOne({ _id: tokenId, isDeleted: false });
  if (!token) {
    throw new AuthFailedError(
      ERROR_MESSAGES.AUTHENTICATION_FAILED,
      STATUS_CODES.ACTION_FAILED
    );
  }
  const updatedToken = await Token.findByIdAndUpdate(tokenId, {
    isDeleted: true,
  });
  return updatedToken;
};

const generateDoctorResetPassword = async (email) => {
  const user = await doctorService.getDoctorByEmail(email);

  var tokenId = new ObjectID();
  const tokenExpires = moment().add(
    config.jwt.resetPasswordExpirationMinutes,
    "day"
  );

  const resetPasswordToken = generateToken({
    doctor: user.id,
    tokenId,
    tokenExpires,
    tokenType: TOKEN_TYPE.RESET_PASSWORD,
  });

  await saveToken({
    token: resetPasswordToken,
    tokenId,
    resetPasswordToken,
    user,
    tokenExpires,
    tokenType: TOKEN_TYPE.RESET_PASSWORD,
    userType: USER_TYPE.DOCTOR,
  });

  return resetPasswordToken;
};

exports.generateResetPasswordToken = async (email) => {
  const user = await profileService.getProfileByEmail(email);

  var tokenId = new ObjectID();

  const tokenExpires = moment().add(
    config.jwt.resetPasswordExpirationMinutes,
    "day"
  );

  const resetPasswordToken = generateToken({
    tokenId: tokenId,
    user: user._id,
    tokenExpires,
    tokenType: TOKEN_TYPE.RESET_PASSWORD,
  });

  await saveToken({
    token: resetPasswordToken,
    tokenExpires,
    tokenId,
    tokenType: TOKEN_TYPE.RESET_PASSWORD,
    userType: USER_TYPE.USER,
    user,
  });
  return resetPasswordToken;
};

exports.generateAdminResetPasswordToken = async (email) => {
  const user = await adminService.getAdminByEmail(email);

  var tokenId = new ObjectID();

  const tokenExpires = moment().add(
    config.jwt.resetPasswordExpirationMinutes,
    "day"
  );

  const resetPasswordToken = generateToken({
    tokenId: tokenId,
    user: user._id,
    tokenExpires,
    tokenType: TOKEN_TYPE.RESET_PASSWORD,
  });

  await saveToken({
    token: resetPasswordToken,
    tokenExpires,
    tokenId,
    tokenType: TOKEN_TYPE.RESET_PASSWORD,
    userType: USER_TYPE.ADMIN,
    user,
  });
  return resetPasswordToken;
};

exports.verifyResetPasswordToken = async (token) => {
  try {
    jwt.verify(token, config.jwt.secret);
    const data = await Token.findOne({ token }).lean();
    return data;
  } catch (err) {
    return err;
  }
};

exports.getTokenById = async (type, _id) => {
  const token = await Token.findOne({ type, _id });
  if (!token) {
    throw new AuthFailedError(
      ERROR_MESSAGES.TOKEN_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
  return token;
};

module.exports = {
  generateDoctorResetPassword,
  generateAuthToken,
  saveToken,
  refreshAuth,
  logout,
  adminverifyToken,
  generateResetPasswordToken,
  verifyResetPasswordToken,
};

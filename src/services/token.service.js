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

const generateToken = (data, secret = config.jwt.secret) => {
  const payload = {
    // user: data.user,
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

const generateResetPasswordToken = async (email) => {
  const user = await User.findOne({ email: email, isDeleted: false }).lean();

  if (!user) {
    throw new AuthFailedError(
      ERROR_MESSAGES.ACCOUNT_NOT_EXIST,
      STATUS_CODES.ACTION_FAILED
    );
  }

  var tokenId = new ObjectID();
  const tokenExpires = moment().add(
    config.jwt.resetPasswordExpirationMinutes,
    "minutes"
  );

  const resetPasswordToken = generateToken({
    user: user.id,
    tokenId,
    tokenExpires,
    tokenType: TOKEN_TYPE.RESET_PASSWORD,
  });

  const data = await saveToken({
    token: resetPasswordToken,
    tokenId,
    resetPasswordToken,
    user,
    tokenExpires,
    tokenType: TOKEN_TYPE.RESET_PASSWORD,
    userType: USER_TYPE.USER,
  });

  return { resetPasswordToken };
};

const generateDoctorResetPassword = async (email) => {
  const user = await Doctor.findOne({ email: email });

  if (!user) {
    throw new OperationalError(
      STATUS_CODES.ACTION_FAILED,
      ERROR_MESSAGES.ACCOUNT_NOT_EXIST
    );
  }

  if (user.isDeleted) {
    throw new OperationalError(
      STATUS_CODES.ACTION_FAILED,
      ERROR_MESSAGES.ACCOUNT_BLOCKED
    );
  }

  var tokenId = new ObjectID();
  const tokenExpires = moment().add(
    config.jwt.resetPasswordExpirationMinutes,
    "minutes"
  );

  const resetPasswordToken = generateToken({
    doctor: user.id,
    tokenId,
    tokenExpires,
    tokenType: TOKEN_TYPE.RESET_PASSWORD,
  });

  const data = await saveToken({
    token: resetPasswordToken,
    tokenId,
    resetPasswordToken,
    user,
    tokenExpires,
    tokenType: TOKEN_TYPE.RESET_PASSWORD,
    userType: USER_TYPE.DOCTOR,
  });

  return { resetPasswordToken };
};

const verifyResetPasswordToken = async (token) => {
  const payload = jwt.verify(token, config.jwt.secret);

  const tokenData = await Token.findOne({
    _id: payload.id,
    isDeleted: false,
    // expires: { $gte: new Date() },
  });

  return tokenData;
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

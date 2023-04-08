const bcrypt = require("bcryptjs");
// const { tokenService } = require("../../services");
const { successResponse } = require("../../utils/response");
const { Doctor, Token, Admin } = require("../../models");
const { ApiError } = require("../../utils/universalFunction");
const {
  joi,
  loginType,
  USER_TYPE,
  STATUS_CODES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
} = require("../../config/appConstants");
const { OperationalError } = require("../../utils/errors");
const config = require("../../config/config");
const moment = require("moment");
const momentTz = require("moment-timezone");

const createUser = async (userData, doc) => {
  // console.log(userData)

  const data = await Doctor.findOne({
    $or: [{ email: userData.email }, { userName: userData.userName }],
    isDeleted: false,
  });

  if (data) {
    if (data.email === userData.email) {
      throw new OperationalError(
        STATUS_CODES.ACTION_FAILED,
        ERROR_MESSAGES.EMAIL_ALREADY_EXIST
      );
    } else if (data.userName) {
      throw new OperationalError(
        STATUS_CODES.ACTION_FAILED,
        ERROR_MESSAGES.USER_NAME_EXISTS
      );
    }
  }
  
  const documentName=doc.map((data)=>data.filename)
  
  const user = await Doctor.create({
    userName: userData.userName,
    firstName: userData.firstName,
    surName: userData.surName,
    password: userData.password,
    age: userData.age,
    gender: userData.gender,
    email: userData.email,
    specialist:userData.specialist,
    document:documentName
  });
  return user;
};

const userLogin = async (email, password) => {
  let user = await Doctor.findOne({ email: email, isDeleted: false });

  if (!user) {
    throw new OperationalError(
      STATUS_CODES.ACTION_FAILED,
      ERROR_MESSAGES.EMAIL_NOT_FOUND
    );

    // throw new ApiError(
    //   ERROR_MESSAGES.EMAIL_NOT_FIND
    //   // httpStatus.UNAUTHORIZED,
    //   // "Email does not exist please signup"
    // );
  }
  // if (user.isVerified===false) {
  //   throw new OperationalError(
  //     STATUS_CODES.AUTH_FAILED,
  //     ERROR_MESSAGES.VERIFY_USER
  //   );
  // }

  if (user.isBlocked) {
    throw new OperationalError(
      STATUS_CODES.ACTION_FAILED,
      ERROR_MESSAGES.ACCOUNT_BLOCKED
    );
  }

  if (user.isDeleted) {
    throw new OperationalError(
      STATUS_CODES.ACTION_FAILED,
      ERROR_MESSAGES.ACCOUNT_DELETED
    );
  }

  if (!(await user.isPasswordMatch(password))) {
    throw new OperationalError(
      STATUS_CODES.ACTION_FAILED,
      ERROR_MESSAGES.WRONG_PASSWORD
    );
  }

  return user;
};

const getUserById = async (userId) => {
  const user = await User.findById(userId).lean();

  if (!user) {
    throw new OperationalError(
      STATUS_CODES.NOT_FOUND,
      ERROR_MESSAGES.USER_NOT_FOUND
    );
  }

  return user;
};

const userLogout = async (userId) => {
  const token = await Token.findOne({ _id: userId, isDeleted: false });

  if (!token) {
    throw new OperationalError(
      STATUS_CODES.ACTION_FAILED,
      ERROR_MESSAGES.AUTHENTICATION_FAILED
    );
  }
  if (token.isDeleted) {
    throw new OperationalError(STATUS_CODES.NOT_FOUND, ERROR_MESSAGES.LOG_OUT);
  }
  await Token.findByIdAndUpdate(
    { _id: userId },
    { isDeleted: true },
    { new: true }
  );
  return;
};

const resetPassword = async (tokenData, newPassword) => {
  let query = tokenData.doctor;

  newPassword = await bcrypt.hash(newPassword, 8);
  if (tokenData.role === USER_TYPE.DOCTOR) {
    const userdata = await Doctor.findOneAndUpdate(
      { _id: query },
      { $set: { password: newPassword } }
    );
    const tokenvalue = await Token.findByIdAndUpdate(tokenData._id, {
      isDeleted: true,
    });
    return { userdata, tokenvalue };
  }

  // const adminvalue = await Admin.findOneAndUpdate(
  //   { _id: query },
  //   { $set: { password: newPassword } }
  // );
  const tokenvalue = await Token.findByIdAndUpdate(tokenData._id, {
    isDeleted: true,
  });

  return { tokenvalue, adminvalue };
};

const verifyEmailToken = async (tokenData) => {
  if (tokenData.role === USER_TYPE.USER) {
    const userValue = await Doctor.findByIdAndUpdate(tokenData.user, {
      isVerified: true,
    });
    const tokenvalue = await Token.findByIdAndUpdate(tokenData._id, {
      isDeleted: true,
      isVerified: true,
    });
    return tokenvalue;
  }
};

module.exports = {
  createUser,
  userLogin,
  userLogout,
  resetPassword,
  getUserById,
  verifyEmailToken,
};

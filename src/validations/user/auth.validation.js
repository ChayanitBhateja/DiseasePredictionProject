const { valid } = require("joi");
//const Joidate = require('joi').extend(require('@joi/date'));
const Joi = require("joi");
const {
  JOI,
  USER_TYPE,
  WORK_TYPE,
  SOCIAL_LOGIN,
  PUSH_NOTIFICATION_STATUS,
  DEVICE_TYPE,
  GENDER_TYPE
} = require("../../config/appConstants");

exports.login = {
  body: Joi.object().keys({
    email: Joi.string().email().lowercase().trim().required(),
    password: Joi.string().min(4).required(),
    // deviceToken:Joi.string().required(),
    // deviceType:Joi.string().valid(...Object.values(DEVICE_TYPE)),
  }),
};

exports.signUp = {
  body: Joi.object().keys({
   // profilePic: Joi.string().allow(''),
    userName: Joi.string().required(),
    firstName: Joi.string().required(),
    surName: Joi.string().required(),
    password: Joi.string().min(4).required(),
    age:Joi.number().required(),
    gender:Joi.string().valid(...Object.values(GENDER_TYPE)),
    email: Joi.string().email().lowercase().trim().required(),
    //dateOfBirth: Joidate.date().format('DD-MM-YYYY').allow(''),
  }),
};

exports.forgotPassword = {
  body: Joi.object().keys({
    email: JOI.EMAIL,
    // userType: Joi.string().required(),
  }),
};

exports.forgotPage = {
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
};

exports.verifyEmail= {
  body: Joi.object().keys({
    email: JOI.EMAIL,
  }),
};

exports.resetForgotPassword = {
  body: Joi.object().keys({
    newPassword: Joi.string().min(6).required(),
    confirmPassword: Joi.any()
      .valid(Joi.ref("newPassword"))
      .required()
      .messages({ "any.only": "Password does not match" }),
  }),
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
};

exports.changePassword = {
  body: Joi.object().keys({
    oldPassword: Joi.string().min(6).required(),
    newPassword: Joi.string().min(6).required(),
  }),
};
exports.editprofile = {
  body: Joi.object().keys({
    firstName: Joi.string(),
    password: Joi.string(),
    lastName: Joi.string(),
    profileImage: Joi.string(),
    phoneNumber: Joi.string()
      .max(10)
      .min(10)
      .message("Please enter a valid phone number"),
  }),
};



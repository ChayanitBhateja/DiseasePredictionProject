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
  GENDER_TYPE,
} = require("../../config/appConstants");

exports.login = {
  body: Joi.object().keys({
    email: Joi.string().email().lowercase().trim().required(),
    password: Joi.string().min(4).required(),
  }),
};

exports.signUp = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    password: Joi.string().min(4).required(),
    email: Joi.string().email().lowercase().trim().required(),
  }),
};

exports.forgotPassword = {
  body: Joi.object().keys({
    email: JOI.EMAIL,

  }),
};

exports.forgotPage = {
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
};

exports.verifyEmail = {
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
    oldPassword: Joi.string().min(4).required(),
    newPassword: Joi.string().min(4).required(),
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
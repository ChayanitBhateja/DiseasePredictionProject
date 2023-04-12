const Joi = require("joi");
const { JOI } = require("../../config/appConstants");

exports.login = {
  body: Joi.object().keys({
    email: Joi.string().email().lowercase().trim().required(),
    password: JOI.PASSWORD,
  }),
};

exports.signUp = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    password: JOI.PASSWORD,
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

exports.resetForgotPassword = {
  body: Joi.object().keys({
    newPassword: JOI.PASSWORD,
  }),
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
};

exports.changePassword = {
  body: Joi.object().keys({
    oldPassword: JOI.PASSWORD,
    newPassword: JOI.PASSWORD,
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

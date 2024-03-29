const Joi = require("joi");
const { JOI, USER_TYPE } = require("../../config/appConstants");

exports.adminLogin = {
  body: Joi.object().keys({
    email: Joi.string().email().lowercase().trim().required(),
    password: JOI.PASSWORD,
  }),
};

exports.changePassword = {
  body: Joi.object().keys({
    oldPassword: JOI.PASSWORD,
    newPassword: JOI.PASSWORD,
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
    password: JOI.PASSWORD,
    confirmPassword: JOI.PASSWORD,
  }),
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
};

exports.getDocuments = {
  query: Joi.object().keys({
    role: Joi.string()
      .valid(...Object.values(USER_TYPE))
      .required(),
    id: JOI.OBJECTID,
  }),
};

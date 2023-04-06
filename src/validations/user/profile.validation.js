const { valid } = require("joi");
const Joi = require("joi");
//const Joidate = require("joi").extend(require("@joi/date"));
const {
  JOI,
  USER_TYPE,
  WORK_TYPE,
  socialAuth,
  socialMedia,
} = require("../../config/appConstants");

exports.editprofile = {
  body: Joi.object().keys({
    userName: Joi.string().required(),
    firstName: Joi.string().required(),
    surName: Joi.string().required(),
    email: Joi.string().email().lowercase().trim().required(),
    age:Joi.number().required(),
  }),
};

exports.changePassword = {
  body: Joi.object().keys({
    oldPassword: Joi.string().min(6).required(),
    newPassword: Joi.string().min(6).required(),
  }),
};



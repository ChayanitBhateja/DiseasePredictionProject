const { valid } = require("joi");
const Joi = require("joi");
//const Joidate = require("joi").extend(require("@joi/date"));
const {
  JOI,
  USER_TYPE
} = require("../../config/appConstants");



exports.changePassword = {
  body: Joi.object().keys({
    oldPassword: Joi.string().min(6).required(),
    newPassword: Joi.string().min(6).required(),
  }),
};



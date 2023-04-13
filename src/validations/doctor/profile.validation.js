const Joi = require("joi");
const { JOI } = require("../../config/appConstants");

exports.editprofile = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().lowercase().trim(),
  }),
};

exports.changePassword = {
  body: Joi.object().keys({
    oldPassword: JOI.PASSWORD,
    newPassword: JOI.PASSWORD,
  }),
};

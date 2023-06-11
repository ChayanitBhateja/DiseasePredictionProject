const Joi = require("joi");
const { JOI, USER_TYPE } = require("../../config/appConstants");

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

exports.deleteDocuments = {
  body: Joi.object().keys({
    reports: Joi.array().items(Joi.string().allow("")).allow(""),
  }),
};

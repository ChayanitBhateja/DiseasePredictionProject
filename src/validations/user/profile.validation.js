const Joi = require("joi");
const { JOI, USER_TYPE } = require("../../config/appConstants");

exports.editprofile = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().lowercase().trim().required(),
    profilePic: Joi.string().default("")
  }),
};

exports.changePassword = {
  body: Joi.object().keys({
    oldPassword: Joi.string().min(4).required(),
    newPassword: Joi.string().min(4).required(),
  }),
};
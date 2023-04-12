const Joi = require("joi");
const { JOI, USER_TYPE } = require("../../config/appConstants");

exports.changePassword = {
  body: Joi.object().keys({
    oldPassword: JOI.PASSWORD,
    newPassword: JOI.PASSWORD,
  }),
};

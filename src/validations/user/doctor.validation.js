const Joi = require("joi");
const { JOI, USER_TYPE } = require("../../config/appConstants");

exports.consult = {
  body: Joi.object().keys({
    doctorId: JOI.OBJECTID,
  }),
};

const Joi = require("joi");
const { JOI } = require("../../config/appConstants");

exports.response = {
  body: Joi.object().keys({
    patientId: JOI.OBJECTID,
    response: Joi.string().valid("accept", "reject").required(),
  }),
};

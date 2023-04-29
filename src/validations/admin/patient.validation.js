const Joi = require("joi");
const { JOI } = require("../../config/appConstants");

exports.detail = {
  query: Joi.object().keys({
    patientId: JOI.OBJECTID,
  }),
};

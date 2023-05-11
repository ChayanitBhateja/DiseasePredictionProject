const Joi = require("joi");
const { JOI } = require("../../config/appConstants");

exports.detail = {
  query: Joi.object().keys({
    patientId: JOI.OBJECTID,
  }),
};

exports.toggle = {
  body: Joi.object().keys({
    patientId: JOI.OBJECTID,
    toggle: Joi.number().valid(0, 1).required(),
  }),
};

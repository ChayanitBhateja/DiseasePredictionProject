const Joi = require("joi");
const { JOI } = require("../../config/appConstants");

exports.list = {
  query: Joi.object().keys({
    search: Joi.string().allow(""),
    page: Joi.number().default(0),
    limit: Joi.number().default(10),
  }),
};

exports.response = {
  body: Joi.object().keys({
    patientId: JOI.OBJECTID,
    response: Joi.string().valid("accept", "reject").required(),
  }),
};

exports.remove = {
  body: Joi.object().keys({
    patientId: JOI.OBJECTID,
  }),
};

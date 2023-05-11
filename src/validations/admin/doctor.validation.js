const Joi = require("joi");
const { JOI } = require("../../config/appConstants");

exports.Details = {
  query: Joi.object().keys({
    id: JOI.OBJECTID,
  }),
};

exports.approveDoctor = {
  body: Joi.object().keys({
    id: JOI.OBJECTID,
  }),
};

exports.toggle = {
  body: Joi.object().keys({
    id: JOI.OBJECTID,
    toggle: Joi.number().valid(0, 1).required(),
  }),
};

const Joi = require("joi");
const { JOI } = require("../../config/appConstants");

exports.list = {
  query: Joi.object().keys({
    search: Joi.string().allow(""),
    page: JOI.PAGE,
    limit: JOI.LIMIT,
  }),
};

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

exports.changePassword = {
  body: Joi.object().keys({
    doctorId: JOI.OBJECTID,
    password: Joi.string().min(6).required(),
  }),
};

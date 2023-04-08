const Joi = require("joi");
const { JOI } = require("../../config/appConstants");



exports.Details = {
  query: Joi.object().keys({
     id:Joi.string().required()
  }),
};


exports.approveDoctor = {
  body: Joi.object().keys({
     id:Joi.string().required()
  }),
};
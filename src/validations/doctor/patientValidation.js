const Joi = require("joi");
const { JOI } = require("../../config/appConstants");

exports.list = {
  query: Joi.object().keys({
    search: Joi.string().allow(""),
    page: Joi.number().default(0).allow(""),
    limit: Joi.number().default(10).allow(""),
  }),
};

exports.profile = {
  query: Joi.object().keys({
    patientId: JOI.OBJECTID,
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

exports.predict = {
  query: Joi.object().keys({
    age: Joi.number().required(),
    sex: Joi.number().valid(0, 1).required(),
    cp: Joi.number().required(),
    trtbps: Joi.number().required(),
    chol: Joi.number().required(),
    fbs: Joi.number().required(),
    restecg: Joi.number().required(),
    thalachh: Joi.number().required(),
    exng: Joi.number().required(),
    oldpeak: Joi.number().required(),
    slp: Joi.number().required(),
    caa: Joi.number().required(),
    thall: Joi.number().required(),
    userId: JOI.OBJECTID,
  }),
};

exports.sendPrediction = {
  body: Joi.object().keys({
    patientId: JOI.OBJECTID,
    prediction: Joi.number().valid(0, 1).required(),
    probability: Joi.number().required(),
  }),
};

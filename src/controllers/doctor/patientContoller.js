const patientService = require("../../services/doctor/patientService");
const { catchAsync, probability } = require("../../utils/universalFunction");
const { successResponse } = require("../../utils/response");
const { STATUS_CODES, SUCCESS_MESSAGES } = require("../../config/appConstants");
const { formatDoctor, formatPatient } = require("../../utils/formatResponse");

exports.list = catchAsync(async (req, res) => {
  const patients = await patientService.list(req.token.doctor._id, req.query);
  patients.doctor.patients.map((pat) => {
    formatDoctor(pat);
  });
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS,
    patients
  );
});

exports.patientList = catchAsync(async (req, res) => {
  const patients = await patientService.patientList(
    req.token.doctor._id,
    req.query
  );
  patients?.map((patient) => {
    formatPatient(patient);
  });
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS,
    patients
  );
});

exports.profile = catchAsync(async (req, res) => {
  const patient = await patientService.profile(req.query.patientId);
  formatPatient(patient);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS,
    patient
  );
});

exports.patientRequests = catchAsync(async (req, res) => {
  const patients = await patientService.patientRequests(req.token.doctor._id);
  patients.patientRequest.map((pat) => {
    formatDoctor(pat);
  });
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS,
    patients
  );
});

exports.response = catchAsync(async (req, res) => {
  await patientService.response(req.token.doctor._id, req.body);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS
  );
});

exports.remove = catchAsync(async (req, res) => {
  await patientService.remove(req.token.doctor._id, req.body.patientId);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS
  );
});

exports.predict = catchAsync(async (req, res) => {
  const prediction = await patientService.predict(req.url);
  const possibility = probability();
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS,
    { prediction, possibility }
  );
});

exports.sendPrediction = catchAsync(async (req, res) => {
  await patientService.sendPrediction(req.body);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS
  );
});

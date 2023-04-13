const patientService = require("../../services/doctor/patientService");
const { catchAsync } = require("../../utils/universalFunction");
const { successResponse } = require("../../utils/response");
const { STATUS_CODES, SUCCESS_MESSAGES } = require("../../config/appConstants");
const { formatDoctor } = require("../../utils/formatResponse");

exports.list = catchAsync(async (req, res) => {
  const patients = await patientService.list(req.token.doctor._id);
  patients.patients.map((pat) => {
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
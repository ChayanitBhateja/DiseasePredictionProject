const { adminPatientService } = require("../../services");
const {
  USER_TYPE,
  STATUS_CODES,
  SUCCESS_MESSAGES,
} = require("../../config/appConstants");
const { catchAsync } = require("../../utils/universalFunction");
const { successResponse } = require("../../utils/response");
const { formatPatient } = require("../../utils/formatResponse");

exports.getPatients = catchAsync(async (req, res) => {
  const patients = await adminPatientService.getPatients();
  patients.map((p) => {
    formatPatient(p);
  });
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS,
    patients
  );
});

exports.detail = catchAsync(async (req, res) => {
  const patient = await adminPatientService.detail(req.query.patientId);
  formatPatient(patient);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS,
    patient
  );
});

exports.toggle = catchAsync(async (req, res) => {
  await adminPatientService.toggle(req.body);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS
  );
});

exports.deleteUser = catchAsync(async (req, res) => {
  await adminPatientService.deleteUser(req.query.patientId);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS
  );
});

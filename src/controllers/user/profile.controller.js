const { userProfileService } = require("../../services");
const { catchAsync } = require("../../utils/universalFunction");
const { successResponse } = require("../../utils/response");
const { formatPatient } = require("../../utils/formatResponse");
const { contactUs } = require("../../utils/sendMail");
const { STATUS_CODES, SUCCESS_MESSAGES } = require("../../config/appConstants");

exports.getProfile = catchAsync(async (req, res) => {
  const profile = await userProfileService.getProfile(req.token.user._id);
  formatPatient(profile);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS,
    profile
  );
});

exports.upload = catchAsync(async (req, res) => {
  const user = await userProfileService.upload(req.token.user._id, req.file);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS,
    user
  );
});

exports.editProfile = catchAsync(async (req, res) => {
  const user = await userProfileService.editProfile(
    req.token.user._id,
    req.body,
    req.file
  );
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS
  );
});

exports.getInteractivePlot = catchAsync(async (req, res) => {
  const plot = await userProfileService.getInteractivePlot();

  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS,
    plot
  );
});

exports.getKpi = catchAsync(async (req, res) => {
  const kpi = await userProfileService.getKpi();
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS,
    kpi
  );
});

exports.changePassword = catchAsync(async (req, res) => {
  const user = await userProfileService.changePassword(
    req.body.oldPassword,
    req.body.newPassword,
    req.token.user._id
  );

  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.USER_PASSWORD
  );
});

exports.deleteUser = catchAsync(async (req, res) => {
  await userProfileService.deleteUser(req.token.user._id);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    DELETE_MASSAGES.USER_DELETED
  );
});

exports.deleteDocuments = catchAsync(async (req, res) => {
  await userProfileService.deleteDocuments(
    req.token.user._id,
    req.body.reports
  );
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS
  );
});

const { doctorProfileService } = require("../../services");
const { catchAsync } = require("../../utils/universalFunction");
const { successResponse } = require("../../utils/response");
const { STATUS_CODES, SUCCESS_MESSAGES } = require("../../config/appConstants");
const { formatDoctor } = require("../../utils/formatResponse");

exports.getProfile = catchAsync(async (req, res) => {
  const profile = await doctorProfileService.getProfile(req.token.doctor._id);
  formatDoctor(profile);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS,
    profile
  );
});

exports.editProfile = catchAsync(async (req, res) => {
  const user = await doctorProfileService.editProfile(
    req.token.doctor._id,
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

exports.changePassword = catchAsync(async (req, res) => {
  const user = await doctorProfileService.changePassword(
    req.token.doctor._id,
    req.body.oldPassword,
    req.body.newPassword
  );

  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.USER_PASSWORD
  );
});

exports.deleteUser = catchAsync(async (req, res) => {
  await doctorProfileService.deleteUser(req.token.doctor._id);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    DELETE_MASSAGES.USER_DELETED
  );
});

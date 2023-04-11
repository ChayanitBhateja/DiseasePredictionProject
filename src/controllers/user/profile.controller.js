const { userProfileService } = require("../../services");
const { catchAsync } = require("../../utils/universalFunction");
const { successResponse } = require("../../utils/response");
const { contactUs } = require("../../utils/sendMail");
const { STATUS_CODES, SUCCESS_MESSAGES } = require("../../config/appConstants");

exports.editProfile = catchAsync(async (req, res) => {
  const user = await userProfileService.editProfile(
    req.token.user._id,
    req.body
  );
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS
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

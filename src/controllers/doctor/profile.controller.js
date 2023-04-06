const { userService, doctorProfileService } = require("../../services");
const config = require("../../config/config");
const { catchAsync } = require("../../utils/universalFunction");
const { successResponse } = require("../../utils/response");
const { contactUs } = require("../../utils/sendMail");
const {
  STATUS_CODES,
  SUCCESS_MESSAGES,
  USER_TYPE,
  DELETE_MASSAGES,
} = require("../../config/appConstants");
const {
  formatUser
} = require("../../utils/commonFunction");

const editProfile = catchAsync(async (req, res) => {
  const user = await doctorProfileService.editProfile(
    req.token.doctor._id,
    req.body
  );
  const data = formatUser(user);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS,
    data
  );
});

const changePassword = catchAsync(async (req, res) => {
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



const deleteUser = catchAsync(async (req, res) => {
  const user = await doctorProfileService.deleteUser(req.token.user._id);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    DELETE_MASSAGES.USER_DELETED
  );
});

module.exports = {
  deleteUser,
  editProfile,
  changePassword,
};

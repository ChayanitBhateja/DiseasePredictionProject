const { userDoctorService } = require("../../services");
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
  formatUser,
  formatDoctor
} = require("../../utils/commonFunction");


const userViewDoctor = catchAsync(async (req, res) => {
  const user = await userDoctorService.getAll();
  const value=formatDoctor(user);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.DEFAULT,
    value
  );
});

module.exports = {
    userViewDoctor 
};

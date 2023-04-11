const { userDoctorService } = require("../../services");
const { catchAsync } = require("../../utils/universalFunction");
const { successResponse } = require("../../utils/response");
const { STATUS_CODES, SUCCESS_MESSAGES } = require("../../config/appConstants");
const { formatDoctor } = require("../../utils/commonFunction");

exports.userViewDoctor = catchAsync(async (req, res) => {
  const doctorList = await userDoctorService.getAll();
  doctorList.map((doctor) => {
    formatDoctor(doctor);
  });
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS,
    doctorList
  );
});

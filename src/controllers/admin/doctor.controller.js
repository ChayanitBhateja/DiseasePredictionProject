const { adminDoctorService } = require("../../services");
const {
  USER_TYPE,
  STATUS_CODES,
  SUCCESS_MESSAGES,
} = require("../../config/appConstants");
const { catchAsync } = require("../../utils/universalFunction");
const { successResponse } = require("../../utils/response");
const { formatDoctor } = require("../../utils/commonFunction");

const adminViewDoctor = catchAsync(async (req, res) => {
  const data = await adminDoctorService.adminViewDoctor();
  const value = formatDoctor(data);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.DEFAULT,
    value
  );
});

const doctorDetails = catchAsync(async (req, res) => {
  const data = await adminDoctorService.doctorDetails(req.query);
  const value = formatDoctor(data);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.DEFAULT,
    value
  );
});

const adminApproveDoctor = catchAsync(async (req, res) => {
  const data = await adminDoctorService.adminApproveDoctor(req.body);
  const value = formatDoctor(data);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.DEFAULT,
    value
  );
});

module.exports = {
  adminViewDoctor,
  doctorDetails,
  adminApproveDoctor,
};

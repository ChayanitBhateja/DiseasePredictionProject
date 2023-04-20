const { adminDoctorService } = require("../../services");
const {
  USER_TYPE,
  STATUS_CODES,
  SUCCESS_MESSAGES,
} = require("../../config/appConstants");
const { catchAsync } = require("../../utils/universalFunction");
const { successResponse } = require("../../utils/response");

const adminViewDoctor = catchAsync(async (req, res) => {
  const data = await adminDoctorService.adminViewDoctor();
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.DEFAULT,
    data
  );
});

const doctorDetails = catchAsync(async (req, res) => {
  const data = await adminDoctorService.doctorDetails(req.query);

  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.DEFAULT,
    data
  );
});

const adminApproveDoctor = catchAsync(async (req, res) => {
  const data = await adminDoctorService.adminApproveDoctor(req.body);

  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.DEFAULT,
    data
  );
});

module.exports = {
  adminViewDoctor,
  doctorDetails,
  adminApproveDoctor,
};

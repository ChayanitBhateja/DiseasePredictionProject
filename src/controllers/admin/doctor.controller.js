const { adminDoctorService } = require("../../services");
const {
  USER_TYPE,
  STATUS_CODES,
  SUCCESS_MESSAGES,
} = require("../../config/appConstants");
const { catchAsync } = require("../../utils/universalFunction");
const { successResponse } = require("../../utils/response");
const { formatDoctor } = require("../../utils/formatResponse");

const adminViewDoctor = catchAsync(async (req, res) => {
  const data = await adminDoctorService.adminViewDoctor(req.query);
  data.doctor.map((doc) => {
    formatDoctor(doc);
  });
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS,
    data
  );
});

const doctorDetails = catchAsync(async (req, res) => {
  const data = await adminDoctorService.doctorDetails(req.query);

  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS,
    data
  );
});

const adminApproveDoctor = catchAsync(async (req, res) => {
  const data = await adminDoctorService.adminApproveDoctor(req.body);

  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS,
    data
  );
});

const toggle = catchAsync(async (req, res) => {
  await adminDoctorService.toggle(req.body);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS
  );
});

const deleteDoctor = catchAsync(async (req, res) => {
  await adminDoctorService.deleteDoctor(req.query.id);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS
  );
});

module.exports = {
  adminViewDoctor,
  doctorDetails,
  adminApproveDoctor,
  toggle,
  deleteDoctor,
};

const { userDoctorService } = require("../../services");
const { catchAsync } = require("../../utils/universalFunction");
const { successResponse } = require("../../utils/response");
const { STATUS_CODES, SUCCESS_MESSAGES } = require("../../config/appConstants");
const { formatDoctor } = require("../../utils/formatResponse");

exports.userViewDoctor = catchAsync(async (req, res) => {
  const doctorList = await userDoctorService.getAll(req.query, req.token);
  doctorList.doctor.map((doc) => {
    formatDoctor(doc);
  });

  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS,
    doctorList
  );
});

exports.consult = catchAsync(async (req, res) => {
  const doctor = await userDoctorService.consult(
    req.token.user._id,
    req.body.doctorId
  );
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS
  );
});

exports.remove = catchAsync(async (req, res) => {
  const doctor = await userDoctorService.remove(
    req.token.user._id,
    req.body.doctorId
  );
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS
  );
});

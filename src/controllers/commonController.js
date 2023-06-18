const { catchAsync } = require("../utils/universalFunction");
const { successResponse } = require("../utils/response");
const { STATUS_CODES, SUCCESS_MESSAGES } = require("../config/appConstants");

exports.upload = catchAsync(async (req, res) => {
  req.file = "http://localhost:5000" + req.file.path.substring(7);

  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS,
    req.file
  );
});

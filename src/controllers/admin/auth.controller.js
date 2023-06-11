const { adminService, tokenService, doctorService } = require("../../services");
const {
  USER_TYPE,
  STATUS_CODES,
  SUCCESS_MESSAGES,
} = require("../../config/appConstants");
const { catchAsync } = require("../../utils/universalFunction");
const { successResponse } = require("../../utils/response");
const { formatDoctor, formatPatient } = require("../../utils/formatResponse");
const {
  forgotPasswordEmail,
  doctorforgotPasswordEmail,
} = require("../../utils/sendMail");
const config = require("../../config/config");

exports.adminLogin = catchAsync(async (req, res) => {
  let { email, password } = req.body;
  const admin = await adminService.adminLogin(email, password);
  const token = await tokenService.generateAuthToken(admin, USER_TYPE.ADMIN);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.DEFAULT,
    admin,
    token
  );
});

exports.changePassword = catchAsync(async (req, res) => {
  await adminService.changePassword(
    req.token.admin._id,
    req.body.oldPassword,
    req.body.newPassword
  );
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS
  );
});

exports.dashBoard = catchAsync(async (req, res) => {
  const data = await adminService.dashBoard();
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.DEFAULT,
    data
  );
});

exports.adminLogout = catchAsync(async (req, res) => {
  await doctorService.logout(req.token._id);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.LOGOUT
  );
});

//---------forgot password-------------//
exports.forgotPassword = catchAsync(async (req, res) => {
  const { email } = req.body;
  const resetPasswordToken = await tokenService.generateAdminResetPasswordToken(
    email
  );
  const user = await adminService.getAdminByEmail(email);
  await forgotPasswordEmail(email, resetPasswordToken);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS
  );
});

exports.forgotPage = async (req, res) => {
  try {
    const tokenData = await tokenService.verifyResetPasswordToken(
      req.query.token
    );
    if (tokenData) {
      return res.render("./forgotPassword/forgotPassword", {
        title: "Forgot Password",
        token: req.query.token,
        projectName: config.projectName,
      });
    }
    return res.render("commonMessage", {
      title: "Forgot Password",
      errorMessage: "Sorry, this link has been expired",
      projectName: config.projectName,
    });
  } catch (err) {
    res.render("commonMessage", {
      title: "Forgot Password",
      errorMessage: "Sorry, this link has been expired",
      projectName: config.projectName,
    });
  }
};

exports.resetPassword = catchAsync(async (req, res) => {
  try {
    const token = await tokenService.verifyResetPasswordToken(req.query.token);

    if (!token) {
      return res.render("commonMessage", {
        title: "Forgot Password",
        errorMessage: "Sorry, this link has been expired",
        projectName: config.projectName,
      });
    }

    const { password, confirmPassword } = req.body;

    await adminService.resetPassword(
      token.admin._id,
      password,
      confirmPassword,
      token._id
    );

    return res.render("commonMessage", {
      title: "Forgot Password",
      successMessage: "Your password is successfully changed",
      projectName: config.projectName,
    });
  } catch (err) {
    console.log(err);
    res.render("commonMessage", {
      title: "Forgot Password",
      errorMessage: err,
      projectName: config.projectName,
    });
  }
});

exports.verifyToken = catchAsync(async (req, res) => {
  const token = await tokenService.verifyResetPasswordToken(
    req.headers.authorization
  );
  await tokenService.getTokenById(token.type, token.id);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS
  );
});

//-------------------------------------//

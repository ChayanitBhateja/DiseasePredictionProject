const { userService, tokenService, adminService } = require("../../services");
const config = require("../../config/config");
const { catchAsync } = require("../../utils/universalFunction");
const { successResponse } = require("../../utils/response");
const {
  STATUS_CODES,
  SUCCESS_MESSAGES,
  USER_TYPE,
} = require("../../config/appConstants");
const { forgotPasswordEmail } = require("../../utils/sendMail");

exports.signUp = catchAsync(async (req, res) => {
  const newUser = await userService.createUser(req.body);
  const token = await tokenService.generateAuthToken(newUser, USER_TYPE.USER);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS,
    newUser,
    token
  );
});

exports.userLogin = catchAsync(async (req, res) => {
  const newUser = await userService.userLogin(
    req.body.email,
    req.body.password
  );
  const token = await tokenService.generateAuthToken(newUser, USER_TYPE.USER);

  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS,
    newUser,
    token
  );
});

exports.userLogout = catchAsync(async (req, res) => {
  await tokenService.logout(req.token._id);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.LOGOUT
  );
});

exports.forgotPassword = catchAsync(async (req, res) => {
  const token = await tokenService.generateResetPasswordToken(req.body.email);

  await forgotPasswordEmail(req.body.email, token.resetPasswordToken);
  return res.send(successMessageWithoutData(200, "Email successfully sent"));
});

exports.changePassword = catchAsync(async (req, res) => {
  const user = await userService.changePassword(
    req.body.oldPassword,
    req.body.newPassword,
    req.token.user._id
  );
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS
  );
});

exports.delete = catchAsync(async (req, res) => {
  await userService.delete(req.token.user._id);
  await tokenService.logout(req.token._id);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS
  );
});

//-------page render---------------//
exports.forgotPage = async (req, res) => {
  try {
    const tokenData = await tokenService.verifyResetPasswordToken(
      req.query.token
    );

    if (tokenData) {
      return res.render("forgotPassword/forgotPassword", {
        title: "forgot Password",
        token: req.query.token,
      });
    }
    res.render("forgotPassword/commonMessage", {
      title: "Forgot Password",
      errorMessage: "You have already changed your password",
      projectName: process.env.PROJECT_NAME,
    });
  } catch (error) {
    console.log(error);
    return res.render("forgotPassword/commonMessage", {
      title: "Forgot Password",
      errorMessage: "Sorry, this link has been expired",
      projectName: config.projectName,
    });
  }
};

//-------resetPassword-----------//

exports.resetForgotPassword = catchAsync(async (req, res) => {
  const token = req.query.token;
  const tokenData = await tokenService.verifyResetPasswordToken(token);
  console.log(tokenData, "data");

  if (!tokenData)
    return res.render("forgotPassword/commonMessage", {
      title: "Forgot Password",
      errorMessage: "Sorry, this link has been expired",
      projectName: config.projectName,
    });

  const value = await userService.resetPassword(
    tokenData,
    req.body.newPassword
  );

  return res.render("forgotPassword/commonMessage", {
    title: "Forgot Password",
    successMessage: "Your password is successfully changed",
    projectName: config.projectName,
  });
});

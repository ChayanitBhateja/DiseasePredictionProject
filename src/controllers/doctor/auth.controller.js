const { doctorService, tokenService } = require("../../services");
const config = require("../../config/config");
const { catchAsync } = require("../../utils/universalFunction");
const { successResponse } = require("../../utils/response");
const {
  STATUS_CODES,
  SUCCESS_MESSAGES,
  USER_TYPE,
} = require("../../config/appConstants");

const {
  forgotPasswordEmail,
  doctorforgotPasswordEmail,
} = require("../../utils/sendMail");

exports.signUp = catchAsync(async (req, res) => {
  const newUser = await doctorService.createDoctor(req.body, req.files);
  const token = await tokenService.generateAuthToken(newUser, USER_TYPE.DOCTOR);

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
  const newUser = await doctorService.userLogin(
    req.body.email,
    req.body.password
  );
  const token = await tokenService.generateAuthToken(newUser, USER_TYPE.DOCTOR);

  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS,
    data,
    token
  );
});

exports.userSocialLogin = catchAsync(async (req, res) => {
  const newUser = await doctorService.userSocialLogin(req.body);

  const data = {
    name: newUser.name,
    email: newUser.email,
    pushNotification: newUser.isPushNotification,
  };

  const token = await tokenService.generateAuthToken(
    newUser,
    USER_TYPE.USER,
    req.body.deviceToken,
    req.body.deviceType
  );

  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS,
    data,
    token
  );
});

exports.userLogout = catchAsync(async (req, res) => {
  await doctorService.logout(req.token._id);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.LOGOUT
  );
});

exports.forgotPassword = catchAsync(async (req, res) => {
  const token = await tokenService.generateDoctorResetPassword(req.body.email);

  await doctorforgotPasswordEmail(req.body.email, token.resetPasswordToken);
  return res.send(successMessageWithoutData(200, "Email successfully sent"));
});

//-------page render---------------//
exports.forgotPage = async (req, res) => {
  try {
    const tokenData = await tokenService.verifyResetPasswordToken(
      req.query.token
    );

    if (tokenData) {
      return res.render("PasswordForgot/forgotPassword", {
        title: "forgot Password",
        token: req.query.token,
      });
    }
    res.render("PasswordForgot/commonMessage", {
      title: "Forgot Password",
      errorMessage: "You have already changed your password",
      projectName: process.env.PROJECT_NAME,
    });
  } catch (error) {
    console.log(error);
    return res.render("PasswordForgot/commonMessage", {
      title: "Forgot Password",
      errorMessage: "Sorry, this link has been expired",
      projectName: config.projectName,
    });
  }
};

//-------resetPassword-----------//

exports.resetForgotPassword = catchAsync(async (req, res) => {
  try {
    const token = req.query.token;
    const tokenData = await tokenService.verifyResetPasswordToken(token);

    if (!tokenData)
      return res.render("forgotPassword/commonMessage", {
        title: "Forgot Password",
        errorMessage: "Sorry, this link has been expired",
        projectName: config.projectName,
      });

    const value = await doctorService.resetPassword(
      tokenData,
      req.body.newPassword
    );

    return res.render("forgotPassword/commonMessage", {
      title: "Forgot Password",
      successMessage: "Your password is successfully changed",
      projectName: config.projectName,
    });
  } catch (error) {
    return res.render("forgotPassword/commonMessage", {
      title: "Forgot Password",
      errorMessage: "Sorry, this link has been expired",
      projectName: config.projectName,
    });
  }
});

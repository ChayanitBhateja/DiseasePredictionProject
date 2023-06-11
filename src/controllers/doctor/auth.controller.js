const {
  doctorService,
  tokenService,
  doctorProfileService,
} = require("../../services");
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
  const newUser = await doctorService.createDoctor(req.body);
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
    newUser,
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

exports.delete = catchAsync(async (req, res) => {
  await doctorService.delete(req.token.doctor._id);
  await tokenService.logout(req.token._id);
  return successResponse(
    req,
    res,
    STATUS_CODES.SUCCESS,
    SUCCESS_MESSAGES.SUCCESS
  );
});

//---------forgot password-------------//
exports.forgotPassword = catchAsync(async (req, res) => {
  const { email } = req.body;
  const resetPasswordToken = await tokenService.generateResetPasswordToken(
    email
  );
  const user = await doctorProfileService.getDoctorByEmail(email);
  await forgotPasswordEmail(email, resetPasswordToken, user.name);
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

    await doctorService.resetPassword(
      token.doctor._id,
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

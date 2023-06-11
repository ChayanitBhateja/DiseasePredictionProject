const express = require("express");
const { validate, validateView } = require("../../middlewares/validate");
const authValidation = require("../../validations/doctor/auth.validation");
const authController = require("../../controllers/doctor/auth.controller");
const auth = require("../../middlewares/auth");
const { USER_TYPE } = require("../../config/appConstants");
const { upload } = require("../../middlewares/fileUpload");

const router = express.Router();

router.post("/signUp", validate(authValidation.signUp), authController.signUp);

router.post("/login", validate(authValidation.login), authController.userLogin);

//--------forgot password--------------//

router.post(
  "/forgotPassword",
  validate(authValidation.forgotPassword),
  authController.forgotPassword
);

router
  .route("/resetPassword")
  .get(validateView(authValidation.forgotPage), authController.forgotPage)
  .post(
    validateView(authValidation.resetForgotPassword),
    authController.resetPassword
  );

router.get("/verifyResetPasswordToken", authController.verifyToken);

// //----------end------------------//

router.post("/logout", auth(USER_TYPE.DOCTOR), authController.userLogout);

router.delete("/delete", auth(), authController.delete);

module.exports = router;

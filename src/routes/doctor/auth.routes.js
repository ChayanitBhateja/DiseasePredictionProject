const express = require("express");
const { validate,validateView } = require("../../middlewares/validate");
const authValidation = require("../../validations/doctor/auth.validation");
const authController = require("../../controllers/doctor/auth.controller")
const auth = require("../../middlewares/auth");
const { USER_TYPE,joi } = require("../../config/appConstants");
const {upload}=require("../../middlewares/fileUpload")

const router = express.Router();

router.post(
    "/signUp",
    //validate(authValidation.signUp),
    upload.array("document",12),
    authController.signUp
  )

router.post(
  "/login",
  validate(authValidation.login),
  authController.userLogin
)



// router.get("/getProfile", auth(USER_TYPE.USER), authController.getProfile);

// router.put(
//   "/changePassword",
//   auth(USER_TYPE.USER),
//   validate(authValidation.changePassword),
//   authController.changePassword
// );



// router.post(
//   "/refreshToken",
//   validate(authValidation.refreshToken),
//   authController.refreshToken
// );

//--------forgot password--------------//

router.post(
  "/forgotPassword",
  validate(authValidation.forgotPassword),
  authController.forgotPassword
);

router
  .route("/resetPassword")
  .get(authController.forgotPage)
  .post(
    validateView(validateView(authValidation.forgotPage) ,authValidation.resetForgotPassword),
    authController.resetForgotPassword
  );
 
 
// //----------end------------------//

router.post("/logout", auth(USER_TYPE.DOCTOR), authController.userLogout);




module.exports = router;
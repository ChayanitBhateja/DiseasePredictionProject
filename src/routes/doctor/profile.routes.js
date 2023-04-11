const express = require("express");
const { validate } = require("../../middlewares/validate");
const authValidation = require("../../validations/doctor/profile.validation");
const authController = require("../../controllers/doctor/profile.controller");
const auth = require("../../middlewares/auth");
const { USER_TYPE } = require("../../config/appConstants");

const router = express.Router();

router.put(
  "/edit",
  auth(USER_TYPE.DOCTOR),
  validate(authValidation.editprofile),
  authController.editProfile
);

router.put(
  "/changePassword",
  auth(USER_TYPE.DOCTOR),
  validate(authValidation.changePassword),
  authController.changePassword
);

router.delete(
  "/deleteAccount",
  auth(USER_TYPE.DOCTOR),
  authController.deleteUser
);

module.exports = router;

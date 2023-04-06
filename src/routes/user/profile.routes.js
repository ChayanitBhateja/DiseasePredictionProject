const express = require("express");
const { validate, validateView } = require("../../middlewares/validate");
const authValidation = require("../../validations/user/profile.validation");
const authController = require("../../controllers/user/profile.controller");
const auth = require("../../middlewares/auth");
const { USER_TYPE, joi } = require("../../config/appConstants");

const router = express.Router();

router.put(
  "/edit",
  auth(USER_TYPE.USER),
  validate(authValidation.editprofile),
  authController.editProfile
);

router.put(
  "/changePassword",
  auth(USER_TYPE.USER),
  validate(authValidation.changePassword),
  authController.changePassword
);


router.delete(
  "/deleteAccount",
  auth(USER_TYPE.USER),
  authController.deleteUser
);


module.exports = router;

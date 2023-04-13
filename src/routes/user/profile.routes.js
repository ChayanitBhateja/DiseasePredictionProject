const express = require("express");
const { validate } = require("../../middlewares/validate");
const authValidation = require("../../validations/user/profile.validation");
const authController = require("../../controllers/user/profile.controller");
const auth = require("../../middlewares/auth");
const { USER_TYPE } = require("../../config/appConstants");
const { upload } = require("../../middlewares/fileUpload");

const router = express.Router();

router.put(
  "/edit",
  auth(USER_TYPE.USER),
  upload.single("file"),
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

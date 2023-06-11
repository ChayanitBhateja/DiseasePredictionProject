const express = require("express");
const { validate } = require("../../middlewares/validate");
const authValidation = require("../../validations/doctor/profile.validation");
const authController = require("../../controllers/doctor/profile.controller");
const auth = require("../../middlewares/auth");
const { USER_TYPE } = require("../../config/appConstants");
const { upload } = require("../../middlewares/fileUpload");

const router = express.Router();

router.get("/", auth(USER_TYPE.DOCTOR), authController.getProfile);

router.post(
  "/upload",
  auth(USER_TYPE.DOCTOR),
  upload.single("file"),
  authController.upload
);

router.put(
  "/edit",
  auth(USER_TYPE.DOCTOR),
  upload.single("file"),
  validate(authValidation.editprofile),
  authController.editProfile
);

router.put(
  "/documents",
  auth(USER_TYPE.DOCTOR),
  validate(authValidation.deleteDocuments),
  authController.deleteDocuments
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

const express = require("express");
const { validate } = require("../../middlewares/validate");
const authValidation = require("../../validations/admin/doctor.validation");
const authController = require("../../controllers/admin/doctor.controller");
const auth = require("../../middlewares/auth");
const { USER_TYPE } = require("../../config/appConstants");

const router = express.Router();

router.get(
  "/getAll",
  auth(USER_TYPE.ADMIN),
  validate(authValidation.list),
  authController.adminViewDoctor
);

router.get(
  "/details",
  auth(USER_TYPE.ADMIN),
  validate(authValidation.Details),
  authController.doctorDetails
);

router.post(
  "/approve",
  auth(USER_TYPE.ADMIN),
  validate(authValidation.approveDoctor),
  authController.adminApproveDoctor
);

router.post(
  "/block",
  auth(USER_TYPE.ADMIN),
  validate(authValidation.toggle),
  authController.toggle
);

router.delete(
  "/delete",
  auth(USER_TYPE.ADMIN),
  validate(authValidation.Details),
  authController.deleteDoctor
);

router.post(
  "/changePassword",
  auth(USER_TYPE.ADMIN),
  validate(authValidation.changePassword),
  authController.changePassword
);

module.exports = router;

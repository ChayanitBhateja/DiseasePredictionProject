const express = require("express");
const { validate } = require("../../middlewares/validate");
const authValidation = require("../../validations/admin/doctor.validation");
const authController = require("../../controllers/admin/doctor.controller");
const auth = require("../../middlewares/auth");
const { USER_TYPE } = require("../../config/appConstants");

const router = express.Router();

router.get("/getAll", auth(USER_TYPE.ADMIN), authController.adminViewDoctor);

router.get(
  "/Details",
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

module.exports = router;

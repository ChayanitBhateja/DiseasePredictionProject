const express = require("express");
const { validate } = require("../../middlewares/validate");
const authController = require("../../controllers/user/doctor.controller");
const auth = require("../../middlewares/auth");
const { USER_TYPE } = require("../../config/appConstants");
const doctorValidation = require("../../validations/user/doctor.validation");
const authValidation = require("../../validations/doctor/patientValidation");

const router = express.Router();

router.get(
  "/doctorList",
  auth(),
  validate(authValidation.list),
  authController.userViewDoctor
);

router.post(
  "/consult",
  auth(),
  validate(doctorValidation.consult),
  authController.consult
);

module.exports = router;

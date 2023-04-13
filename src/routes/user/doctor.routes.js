const express = require("express");
const { validate } = require("../../middlewares/validate");
const authController = require("../../controllers/user/doctor.controller");
const auth = require("../../middlewares/auth");
const { USER_TYPE } = require("../../config/appConstants");
const doctorValidation = require("../../validations/user/doctor.validation");

const router = express.Router();

router.get("/doctorList", auth(), authController.userViewDoctor);

router.post(
  "/consult",
  auth(),
  validate(doctorValidation.consult),
  authController.consult
);

module.exports = router;

const express = require("express");
const { validate } = require("../../middlewares/validate");
const authValidation = require("../../validations/admin/patient.validation");
const authController = require("../../controllers/admin/patient.controller");
const auth = require("../../middlewares/auth");
const { USER_TYPE } = require("../../config/appConstants");

const router = express.Router();

router.get("/patientList", auth(USER_TYPE.ADMIN), authController.getPatients);

router.get(
  "/detail",
  auth(USER_TYPE.ADMIN),
  validate(authValidation.detail),
  authController.detail
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
  validate(authValidation.detail),
  authController.deleteUser
);

module.exports = router;

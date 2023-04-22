const express = require("express");
const { validate } = require("../../middlewares/validate");
const authValidation = require("../../validations/doctor/patientValidation");
const authController = require("../../controllers/doctor/patientContoller");
const auth = require("../../middlewares/auth");

const router = express.Router();

router.get("/list", auth(), validate(authValidation.list), authController.list);

router.get("/patientRequests", auth(), authController.patientRequests);

router.post(
  "/response",
  auth(),
  validate(authValidation.response),
  authController.response
);

module.exports = router;

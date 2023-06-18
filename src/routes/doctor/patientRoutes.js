const express = require("express");
const { validate } = require("../../middlewares/validate");
const authValidation = require("../../validations/doctor/patientValidation");
const authController = require("../../controllers/doctor/patientContoller");
const auth = require("../../middlewares/auth");

const router = express.Router();

router.get("/list", auth(), validate(authValidation.list), authController.list);

router.get(
  "/patientList",
  auth(),
  validate(authValidation.list),
  authController.patientList
);

router.get(
  "/patientProfile",
  auth(),
  validate(authValidation.profile),
  authController.profile
);

router.get("/patientRequests", auth(), authController.patientRequests);

router.put(
  "/removePatient",
  auth(),
  validate(authValidation.remove),
  authController.remove
);

router.post(
  "/response",
  auth(),
  validate(authValidation.response),
  authController.response
);

router.post(
  "/predict",
  validate(authValidation.predict),
  authController.predict
);

router.post(
  "/sendPrediction",
  auth(),
  validate(authValidation.sendPrediction),
  authController.sendPrediction
);

module.exports = router;

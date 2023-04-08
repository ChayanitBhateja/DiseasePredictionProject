const express = require("express");
const { validate, validateView } = require("../../middlewares/validate");
const authValidation = require("../../validations/user/doctor.validation");
const authController = require("../../controllers/user/doctor.controller");
const auth = require("../../middlewares/auth");
const { USER_TYPE, joi } = require("../../config/appConstants");

const router = express.Router();






router.get(
  "/getAll",
  auth(USER_TYPE.USER),
  authController.userViewDoctor
);


module.exports = router;

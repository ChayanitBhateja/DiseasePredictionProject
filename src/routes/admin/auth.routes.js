const express = require("express");
const { validate } = require("../../middlewares/validate");
const authValidation = require("../../validations/admin/auth.validation");
const authController = require("../../controllers/admin/auth.controller");
const auth = require("../../middlewares/auth");
const { USER_TYPE } = require("../../config/appConstants");

const router = express.Router();

router.post(
  "/login",
  validate(authValidation.adminLogin),
  authController.adminLogin
);

router.put(
  "/changePassword",
  auth(USER_TYPE.ADMIN),
  validate(authValidation.changePassword),
  authController.changePassword
);

router.post("/logout", auth(USER_TYPE.ADMIN), authController.adminLogout);

//router.get("/dashboard", auth(USER_TYPE.ADMIN), authController.dashBoard)

module.exports = router;

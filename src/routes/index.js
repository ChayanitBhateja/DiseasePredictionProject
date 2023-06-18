const express = require("express");
const userAuth = require("./user/auth.routes");
const userProfile = require("./user/profile.routes");
const doctorAuth = require("./doctor/auth.routes");
const doctorProfile = require("./doctor/profile.routes");
const adminAuth = require("./admin/auth.routes");
const adminDoctor = require("./admin/doctor.routes");
const userDoctor = require("./user/doctor.routes");
const doctorPatient = require("./doctor/patientRoutes");
const adminPatient = require("./admin/patient.routes");
const common = require("./commonRoute");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/admin/auth",
    route: adminAuth,
  },
  {
    path: "/admin/doctor",
    route: adminDoctor,
  },
  {
    path: "/doctor/auth",
    route: doctorAuth,
  },
  {
    path: "/user/auth",
    route: userAuth,
  },
  {
    path: "/user/Profile",
    route: userProfile,
  },
  {
    path: "/doctor/profile",
    route: doctorProfile,
  },
  {
    path: "/user/doctor",
    route: userDoctor,
  },
  {
    path: "/doctor/patient",
    route: doctorPatient,
  },
  {
    path: "/admin/patient",
    route: adminPatient,
  },
  { path: "/", route: common },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;

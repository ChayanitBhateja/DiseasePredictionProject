const express = require("express");
const userAuth = require("./user/auth.routes");
const userProfile = require("./user/profile.routes");
const doctorAuth = require("./doctor/auth.routes");
// const staticRoutes = require("../routes/static.routes");
const doctorProfile= require("./doctor/profile.routes");
const adminAuth = require("./admin/auth.routes");
const adminDoctor=require("./admin/doctor.routes");
const userDoctor=require("./user/doctor.routes");


//const staticRoutes = require("./");
//const commonRoutes = require("./user/common.routes");

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
    route: doctorAuth
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

//   {
//     path: "/",
//     route: staticRoutes,
//   },

  // {
  //   path: "/user",
  //   route: commonRoutes,
  // },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;

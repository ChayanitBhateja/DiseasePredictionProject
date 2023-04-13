const momentTz = require("moment-timezone");
const moment = require("moment");
const { USER_TYPE } = require("../config/appConstants");

const localtime = (DateTime, timeZone) => {
  const localDt = momentTz.tz(DateTime, timeZone).format("YYYY-MM-DDTHH:mm:ss");
  return localDt;
};

const utcTime = (DateTime, timeZone) => {
  const utctime =
    momentTz.tz(DateTime, timeZone).utc().format("YYYY-MM-DDTHH:mm:ss") + "Z";
  return new Date(utctime);
};

const formatDoctor = (doctor) => {
  delete doctor.password;
  delete doctor.__v;
};

module.exports = {
  localtime,
  utcTime,
  formatDoctor,
};

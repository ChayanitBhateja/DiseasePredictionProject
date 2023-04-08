const { Admin, Doctor } = require("../../models");
const { STATUS_CODES, ERROR_MESSAGES } = require("../../config/appConstants");
const { OperationalError } = require("../../utils/errors");

const adminViewDoctor= async () => {
  const doctor = await Doctor.find({isDeleted:false}).lean();

  if (!doctor) {
    throw new OperationalError(
      STATUS_CODES.NOT_FOUND,
      ERROR_MESSAGES.DATA_NOT_EXISTS
    );
  }
 
  return doctor;
};

const doctorDetails= async (data) => {

  const doctor = await Doctor.findOne({_id:data.id,isDeleted:false}).lean();

  if (!doctor) {
    throw new OperationalError(
      STATUS_CODES.NOT_FOUND,
      ERROR_MESSAGES.DATA_NOT_EXISTS
    );
  }
 
  return doctor;
};

const adminApproveDoctor= async (data) => {
  console.log(data)
  const doctor = await Doctor.findOne({_id:data.id}).lean();

  if (!doctor) {
    throw new OperationalError(
      STATUS_CODES.NOT_FOUND,
      ERROR_MESSAGES.DATA_NOT_EXISTS
    );
  }

  await Doctor.findOneAndUpdate(
    {_id:data.id},
    {
      isVerified:true
    },
    {new:true}
  )
 
  return doctor;
};



module.exports = {
adminViewDoctor,
doctorDetails,
adminApproveDoctor
};

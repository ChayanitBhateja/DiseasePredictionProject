const { successResponse } = require("../../utils/response");
const { Doctor} = require("../../models");
const { ApiError } = require("../../utils/universalFunction");
const {
  joi,
  USER_TYPE,
  STATUS_CODES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
} = require("../../config/appConstants");
const { OperationalError } = require("../../utils/errors");
const config = require("../../config/config");
const bcrypt = require("bcryptjs");
const moment=require("moment");

const editProfile = async (id, data) => {
 
  const user = await Doctor.findOne({ _id: id, isDeleted: false });
  if(!user)
  {
    throw new OperationalError(
      STATUS_CODES.ACTION_FAILED,
      ERROR_MESSAGES.USER_NOT_FOUND
    );
  }
  const userData = await Doctor.findOne({
    userName: data.userName,
    isDeleted: false,
  });
  
  if (userData) {
    if (user && user.userName !== userData.userName) {
      throw new OperationalError(
        STATUS_CODES.ACTION_FAILED,
        ERROR_MESSAGES.USER_NAME_EXISTS
      );
    } 
  }

  // if (userData) {
  //   throw new OperationalError(
  //     STATUS_CODES.NOT_FOUND,
  //     ERROR_MESSAGES.USER_NAME_EXISTS
  //   );
  // }

  const updateUser = await Doctor.findByIdAndUpdate(
    { _id: id },
    {
      userName: data.userName,
      firstName: data.firstName,
      surName: data.surName,
      email:data.email,
      age:data.age

    },
    { upsert: false, new: true }
  ).lean();
  return updateUser;
};


const changePassword = async (userId, oldPassword, newPassword) => {
  const user = await Doctor.findById(userId);

  if (!user) {
    throw new OperationalError(
      STATUS_CODES.ACTION_FAILED,
      ERROR_MESSAGES.ACCOUNT_NOT_EXIST
    );
  }
  if (!(await user.isPasswordMatch(oldPassword,user.password))) {
    throw new OperationalError(
      STATUS_CODES.ACTION_FAILED,
      ERROR_MESSAGES.WRONG_PASSWORD
    );
  }

  if ((await bcrypt.compare(newPassword, user.password))) {
    throw new OperationalError(
      STATUS_CODES.ACTION_FAILED,
      ERROR_MESSAGES.USER_OLD_PASSWORD
    );
  }



  let updatedPassword = { password: newPassword };

  Object.assign(user, updatedPassword);
  const value = await user.save();

  return user;
};


const deleteUser=async(user)=>{

  const data=await User.findOne({_id:user});
  
  if(!data)
  {
   STATUS_CODES.NOT_FOUND,
   ERROR_MESSAGES.USER_NOT_FOUND
  }
  const userData=await User.deleteOne({_id:user});

  
  return userData

}

module.exports = {
  deleteUser,
  editProfile,
  changePassword,
};

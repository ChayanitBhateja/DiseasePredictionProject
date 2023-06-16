const { Admin, Token, User, Doctor } = require("../../models");
const {
  STATUS_CODES,
  ERROR_MESSAGES,
  USER_TYPE,
} = require("../../config/appConstants");
const { AuthFailedError } = require("../../utils/errors");
const bcrypt = require("bcryptjs");

exports.adminLogin = async (email, password) => {
  const admin = await Admin.findOne({ email: email }).lean();

  if (!admin) {
    throw new AuthFailedError(
      ERROR_MESSAGES.EMAIL_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
  if (!(await bcrypt.compare(password, admin.password))) {
    throw new AuthFailedError(
      ERROR_MESSAGES.WRONG_PASSWORD,
      STATUS_CODES.AUTH_FAILED
    );
  }
  return admin;
};

exports.changePassword = async (adminId, oldPassword, newPassword) => {
  const admin = await Admin.findById(adminId);
  if (!(await bcrypt.compare(oldPassword, admin.password))) {
    throw new AuthFailedError(
      ERROR_MESSAGES.WRONG_PASSWORD,
      STATUS_CODES.AUTH_FAILED
    );
  }
  let newPass = await bcrypt.hash(newPassword, 8);
  await Admin.findByIdAndUpdate(
    adminId,
    { $set: { password: newPass } },
    { new: true, lean: 1 }
  );
  return admin;
};

exports.dashBoard = async () => {
  const [user, doctor] = await Promise.all([
    User.countDocuments({ isDeleted: false }).lean(),
    Doctor.countDocuments({ isDeleted: false }).lean(),
  ]);
  return { user, doctor };
};

exports.getAdminByEmail = async (email) => {
  const user = await Admin.findOne({
    email: email,
  }).lean();

  if (!user) {
    throw new AuthFailedError(
      ERROR_MESSAGES.USER_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
  return user;
};

exports.resetPassword = async (
  adminId,
  newPassword,
  confirmPassword,
  tokenId
) => {
  if (newPassword !== confirmPassword) {
    throw new AuthFailedError(
      ERROR_MESSAGES.CONFIRM_PASSWORD,
      STATUS_CODES.ACTION_FAILED
    );
  }
  let updatedPassword = await bcrypt.hash(newPassword, 8);
  const user = await Admin.findByIdAndUpdate(adminId, {
    $set: { password: updatedPassword },
  });
  await Token.deleteOne({ _id: tokenId });
  return user;
};

exports.getDocuments = async (_id, type) => {
  let data;
  if (type === USER_TYPE.DOCTOR) {
    data = await Doctor.findOne({ _id }, { documents: 1 }).lean();
  } else {
    data = await User.findOne({ _id }, { reports: 1 }).lean();
  }
  if (!data) {
    throw new AuthFailedError(
      ERROR_MESSAGES.USER_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }

  return data;
};

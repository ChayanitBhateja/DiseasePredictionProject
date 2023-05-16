const { Admin, Token, User, Doctor } = require("../../models");
const { STATUS_CODES, ERROR_MESSAGES } = require("../../config/appConstants");
const { AuthFailedError } = require("../../utils/errors");
const { paginationOptions } = require("../../utils/universalFunction");

exports.getPatients = async (data) => {
  let query = { isDeleted: false };
  if (data.search) {
    let searchRegex = RegExp(data.search, "i");

    query = {
      ...query,
      $or: [
        { name: { $regex: searchRegex } },
        { email: { $regex: searchRegex } },
      ],
    };
  }
  const [user, count] = await Promise.all([
    User.find(query, {}, paginationOptions(data.page, data.limit)).lean(),
    User.countDocuments(query),
  ]);

  return { user, count };
};

exports.detail = async (patienId) => {
  const user = await User.findOne({ _id: patienId, isDeleted: false }).lean();
  if (!user) {
    throw new AuthFailedError(
      ERROR_MESSAGES.USER_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
  return user;
};

exports.toggle = async (body) => {
  let response = body.toggle === 0 ? false : true;

  const user = await User.findOneAndUpdate(
    { _id: body.patienId, isDeleted: false },
    { $set: { isBlocked: response } },
    { new: true, lean: 1 }
  );
  if (!user) {
    throw new AuthFailedError(
      ERROR_MESSAGES.USER_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
};

exports.deleteUser = async (patienId) => {
  const user = await User.findOneAndUpdate(
    { _id: patienId, isDeleted: false },
    { $set: { isDeleted: true } },
    { new: true, lean: 1 }
  );
  if (!user) {
    throw new AuthFailedError(
      ERROR_MESSAGES.USER_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
};

const mongoose = require("mongoose");
const {
  TOKEN_TYPE,
  USER_TYPE,
  DEVICE_TYPE,
} = require("../config/appConstants");

const tokenSchema = mongoose.Schema(
  {
    user: { type: mongoose.SchemaTypes.ObjectId, ref: "users" },
    admin: { type: mongoose.SchemaTypes.ObjectId, ref: "admins" },
    doctor: { type: mongoose.SchemaTypes.ObjectId, ref: "doctor" },
    expires: { type: Date, required: true },
    token: { type: String, unique: true },
    role: { type: String, enum: [...Object.values(USER_TYPE)] },
    type: { type: String, enum: [...Object.values(TOKEN_TYPE)] },
    device: {
      token: { type: String },
    },
    isDeleted: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
    blacklisted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Token = mongoose.model("token", tokenSchema);

module.exports = Token;

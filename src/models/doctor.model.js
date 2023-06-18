const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { USER_ROLE } = require("../config/appConstants");

const doctorSchema = new mongoose.Schema(
  {
    profilePic: { type: String },
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
    },
    specialist: { type: String },
    patientRequest: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
    patients: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
    documents: [{ type: String, default: [] }],
    isVerified: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

doctorSchema.methods.isPasswordMatch = async (password) => {
  const doctor = this;
  return bcrypt.compare(password, doctor.password);
};

doctorSchema.pre("create", async (next) => {
  const docctor = this;
  if (docctor.isModified("password")) {
    docctor.password = await bcrypt.hash(docctor.password, 8);
  }
  next();
});

const Doctor = mongoose.model("doctor", doctorSchema);

module.exports = Doctor;

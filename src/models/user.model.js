const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    profilePic: {type: String},
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
    },
    password: { type: String, required: true },
    reports: [{ type: String }],
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "doctor" },
    isBlocked: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.isPasswordMatch = async (password) => {
  const user = this;
  return bcrypt.compare(password, user.password);
};

userSchema.pre("create", async (next) => {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("users", userSchema);

module.exports = User;

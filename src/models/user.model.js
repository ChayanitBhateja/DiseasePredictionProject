const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const {
  WORK_TYPE,
  USER_ROLE,
  GENDER_TYPE,
} = require("../config/appConstants");
const { string } = require("joi");

const userSchema = mongoose.Schema(
  {
    //profilePic: { type: String, default: "" },
    userName: { type: String, required: true },
    firstName: { type: String, default: "" },
    surName: { type: String, default: "" },
    password: { type: String, default: "" },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      sparse: true,
      default: "",
    },
    age:{type:Number},
    gender:{type:String, enum: [...Object.values(GENDER_TYPE)]},
    isBlocked: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const emplyee = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!userSchema;
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.firstName) {
    user.firstName =
      user.firstName.trim()[0].toUpperCase() +
      user.firstName.slice(1).toLowerCase();
    if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 8);
    }
  }

  next();
});
userSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

const User = mongoose.model("user", userSchema);

module.exports = User;

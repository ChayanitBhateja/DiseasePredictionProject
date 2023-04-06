const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const {
  WORK_TYPE,
  USER_ROLE,
  GENDER_TYPE,
} = require("../config/appConstants");
const { string } = require("joi");

const doctorSchema = mongoose.Schema(
  {
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
    // role:{type:String,enum: [...Object.values(USER_ROLE)]},
    document:{type:Array,default:[]},
    // dateOfBirth: {
    //   type: Date
    // },
    // loc: {
    //   type: {
    //     type: String,
    //     default: "Point",
    //   },
    //   coordinates: {
    //     type: [Number],
    //     // default: [0, 0],
    //     // required: true,
    //     // longitude, latitude
    //   },
    // },
    isBlocked: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

doctorSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const emplyee = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!doctorSchema;
};

doctorSchema.pre("save", async function (next) {
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
doctorSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

const Doctor = mongoose.model("doctor", doctorSchema);

module.exports = Doctor;

const mongoose = require("mongoose");

const predictionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    age: { type: Number, required: true },
    sex: { type: Number, required: true },
    cp: { type: Number, required: true },
    trtbps: { type: Number, required: true },
    chol: { type: Number, required: true },
    fbs: { type: Number, required: true },
    restecg: { type: Number, required: true },
    thalachh: { type: Number, required: true },
    exng: { type: Number, required: true },
    oldpeak: { type: Number, required: true },
    slp: { type: Number, required: true },
    caa: { type: Number, required: true },
    thall: { type: Number, required: true },
    prediction: { type: Number, required: true },
    probability: { type: Number, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Prediction = mongoose.model("predictions", predictionSchema);

module.exports = Prediction;

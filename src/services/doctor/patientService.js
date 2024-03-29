const { Doctor, User, Prediction } = require("../../models");
const { STATUS_CODES, ERROR_MESSAGES } = require("../../config/appConstants");
const { AuthFailedError } = require("../../utils/errors");
const axios = require("axios");
const { paginationOptions } = require("../../utils/universalFunction");
const fs = require("fs");
const path = require("path");

exports.list = async (doctorId, query) => {
  const patients = await Doctor.findById(doctorId).lean();
  let doctor = await Doctor.findById(doctorId)
    .lean()
    .select("patients")
    .populate({
      path: "patients",
      options: { skip: query.page * query.limit, limit: query.limit },
    });
  doctor.patients = doctor.patients.filter((p) => !p.isDeleted);
  const totalPatients = await User.countDocuments({ isDeleted: false });
  if (query.search) {
    doctor.patients = doctor.patients.filter(
      (p) =>
        JSON.stringify(p.name.toLowerCase()).includes(
          query.search.toLowerCase()
        ) ||
        JSON.stringify(p.email.toLowerCase()).includes(
          query.search.toLowerCase()
        )
    );
  }
  return { doctor, count: patients.patients.length, totalPatients };
};

exports.patientList = async (doctorId, query) => {
  const doctor = await Doctor.findById(doctorId).lean();
  let data = { isDeleted: false };
  if (query.search) {
    let searchReg = RegExp(query.search, "i");

    data = { ...data, $or: [{ name: searchReg }, { email: searchReg }] };
  }

  let [patients, count] = await Promise.all([
    User.find(data, {}, paginationOptions(query.page, query.limit)),
    User.countDocuments({ isDeleted: false }),
  ]);

  for (const pat of doctor.patients) {
    patients = patients?.filter(
      (patient) => JSON.stringify(pat) !== JSON.stringify(patient._id)
    );
  }

  return { patients, count };
};

exports.profile = async (_id) => {
  const user = await User.findOne({ _id, isDeleted: false }).lean();
  if (!user) {
    throw new AuthFailedError(
      ERROR_MESSAGES.USER_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
  return user;
};

exports.patientRequests = async (doctorId) => {
  let doctor = await Doctor.findById(doctorId)
    .lean()
    .select("patientRequest")
    .populate({ path: "patientRequest" });
  doctor.patientRequest = doctor.patientRequest.filter((p) => !p.isDeleted);
  return doctor;
};

exports.response = async (doctorId, body) => {
  if (body.response === "accept") {
    const doctor = await Doctor.findByIdAndUpdate(
      doctorId,
      {
        $pull: { patientRequest: body.patientId },
        $addToSet: { patients: body.patientId },
      },
      { new: true, lean: 1 }
    );
    let user = await User.findOneAndUpdate(
      { _id: body.patientId, isDeleted: false },
      { $set: { doctor: doctor._id } },
      { new: true, lean: 1 }
    );
    if (!user) {
      throw new AuthFailedError(
        ERROR_MESSAGES.USER_NOT_FOUND,
        STATUS_CODES.ACTION_FAILED
      );
    }
  } else {
    const doctor = await Doctor.findByIdAndUpdate(
      doctorId,
      {
        $pull: { patientRequest: body.patientId },
      },
      { new: true, lean: 1 }
    );
  }
};

exports.remove = async (doctorId, patienId) => {
  const doctor = await Doctor.findByIdAndUpdate(
    doctorId,
    { $pull: { patients: patienId } },
    { new: 1, lean: 1 }
  );

  const user = await User.findByIdAndUpdate(patienId, {
    $unset: { doctor: "" },
  });

  return user;
};

exports.predict = async (url, user, query, probability) => {
  try {
    const swaggerUrl = `http://127.0.01:8000/get_prediction?${
      url.split("?")[1]
    }`;
    const response = await axios.get(swaggerUrl);

    await Prediction.create({
      user,
      age: query.age,
      sex: query.sex,
      cp: query.cp,
      trtbps: query.trtbps,
      chol: query.chol,
      fbs: query.fbs,
      restecg: query.restecg,
      thalachh: query.thalachh,
      exng: query.exng,
      oldpeak: query.oldpeak,
      slp: query.slp,
      caa: query.caa,
      thall: query.thall,
      prediction: response.data["prediction"],
      probability: probability,
    });

    const filepath = path.join(
      __dirname,
      "../../../../DiseasePredictionProjectAPIs/dataset/heart.csv"
    );

    const arrData = [
      `${query.age}`,
      `${query.sex}`,
      `${query.cp}`,
      `${query.trtbps}`,
      `${query.chol}`,
      `${query.fbs}`,
      `${query.restecg}`,
      `${query.thalachh}`,
      `${query.exng}`,
      `${query.oldpeak}`,
      `${query.slp}`,
      `${query.caa}`,
      `${query.thall}`,
      `${response.data["prediction"]}`,
    ];

    fs.readFile(filepath, "utf-8", (err, data) => {
      if (err) {
        console.log(err, "from read file");
        return err;
      }

      const fileData = data.concat("\r" + arrData);
      // console.log(fileData);
      fs.writeFileSync(filepath, fileData, "utf-8", (err) => {
        if (err) {
          console.log(err, "from write file");
        }
      });
    });

    return response.data["prediction"];
  } catch (err) {
    throw new AuthFailedError(err, STATUS_CODES.ACTION_FAILED);
  }
};

exports.sendPrediction = async (body) => {
  const user = await User.findOneAndUpdate(
    { _id: body.patientId, isDeleted: false },
    {
      $set: {
        prediction: body.prediction,
        probability: body.probability,
      },
    },
    { new: 1, lean: 1 }
  );
  if (!user) {
    throw new AuthFailedError(
      ERROR_MESSAGES.USER_NOT_FOUND,
      STATUS_CODES.ACTION_FAILED
    );
  }
};

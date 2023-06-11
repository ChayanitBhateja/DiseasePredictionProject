const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const Handlebars = require("handlebars");
const dotenv = require("dotenv");
dotenv.config();

var resetPassword = fs.readFileSync(
  path.join(__dirname, "../../views/email/resetPassword.hbs"),
  "utf8"
);

var resetPasswordTemplate = Handlebars.compile(resetPassword);

var resetDoctorPassword = fs.readFileSync(
  path.join(__dirname, "../../views/doctorEmail/resetPassword.hbs"),
  "utf8"
);

var resetDoctorNewPassword = Handlebars.compile(resetDoctorPassword);

try {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    secureConnection: true,
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASSWORD,
    },
  });

  function forgotPasswordEmail(email, token) {
    return new Promise((resolve, reject) => {
      var info = {
        from: process.env.SENDER_EMAIL,
        to: email,
        subject: "Reset Password",
        // attachments: [
        //   {
        //     filename: "logo.png",
        //     path: __dirname + "/images/logo.png",
        //     cid: "logo",
        //   },
        // ],
        html: resetPasswordTemplate({
          token,
          apiBaseUrl: process.env.API_BASE_URL,
          title: "Forgot Password",
        }),
      };

      transporter.sendMail(info, (error, accept) => {
        if (error) {
          reject(error);
        }
        resolve(accept, console.log("Mail Sended"));
      });
    });
  }

  function doctorforgotPasswordEmail(email, token) {
    return new Promise((resolve, reject) => {
      var info = {
        from: process.env.SENDER_EMAIL,
        to: email,
        subject: "Reset Password",
        // attachments: [
        //   {
        //     filename: "logo.png",
        //     path: __dirname + "/images/logo.png",
        //     cid: "logo",
        //   },
        // ],
        html: resetDoctorNewPassword({
          token,
          apiBaseUrl: process.env.API_BASE_URL,
          title: "Forgot Password",
        }),
      };

      transporter.sendMail(info, (error, accept) => {
        if (error) {
          reject(error);
        }
        resolve(accept, console.log("Mail Sended"));
      });
    });
  }
} catch (err) {
  throw err;
}

module.exports = { forgotPasswordEmail, doctorforgotPasswordEmail };

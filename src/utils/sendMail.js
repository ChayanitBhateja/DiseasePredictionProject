const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const Handlebars = require("handlebars");
const dotenv = require("dotenv");
dotenv.config();
// const config = require("../config/config");

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

// var verifyEmail = fs.readFileSync(
//   path.join(__dirname, "../../views/verifyEmail/verify.hbs"),
//   "utf8"
// );

//  var verifyEmailTemplate = Handlebars.compile(verifyEmail);

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
          apiBaseUrl: process.env.ForgotPassword,
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
          apiBaseUrl: process.env.ForgotPassword,
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


  function contactUs(firstName, surName, email, body) {
    return new Promise((resolve, reject) => {
      var info = {
        from: process.env.SENDER_EMAIL,
        to: process.env.SENDER_EMAIL,
        subject: "Contact Us Report",
        html: `<b><span>First-Name:</span></b><span>${firstName}</span>
        <b><br><br><span>Surname:</span></b>${surName}<br><br><b>
        <span>Email:</span></b>${email}<b>
        <br><br><span>Message:</span></b><span>${body}</span>`,
      };
      // <span>Phone-no:</span></b><span>${phoneNumber}</span>

      transporter.sendMail(info, (error, accept) => {
        if (error) {
          reject(error);
        }
        resolve(accept, console.log("Mail Sended"));
      });
    });
  }

//   function verifyAccount(email, token) {
//     return new Promise((resolve, reject) => {
//       var info = {
//         from: process.env.SENDER_EMAIL,
//         to: email,
//         subject: "Verify Account",
//         html: verifyAccountTemplate({
//           title: "Verification",
//           token,
//           apiBaseUrl: process.env.ForgotPassword,
//         }),
//       };

//       transporter.sendMail(info, (error, accept) => {
//         if (error) {
//           reject(error);
//         }
//         resolve(accept, console.log("Mail Sended"));
//       });
//     });
//   }

  function verifyEmail(email, token) {
    return new Promise((resolve, reject) => {
      var info = {
        from: process.env.SENDER_EMAIL,
        to: email,
        subject: "Verify Email",
        // attachments: [
        //   {
        //     filename: "logo.png",
        //     path: __dirname + "/images/logo.png",
        //     cid: "logo",
        //   },
        // ],
        html: verifyEmailTemplate({
          token,
          apiBaseUrl: process.env.ForgotPassword,
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

module.exports = { forgotPasswordEmail,doctorforgotPasswordEmail};

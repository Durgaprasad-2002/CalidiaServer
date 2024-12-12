const smtpTransport = require("nodemailer-smtp-transport");
const nodemailer = require("nodemailer");
require("dotenv").config();

// Creating Transporter
const transporter = nodemailer.createTransport(
  smtpTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
    debug: true,
  })
);

// Creating promise to send email
function sendEmail(mailOptions) {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email:", error);
        reject(error);
      } else {
        console.log("Email sent:", info.response);
        resolve(info);
      }
    });
  });
}

module.exports = { sendEmail };

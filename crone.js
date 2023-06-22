const User = require("./models/userModel");
const config = require("./config/config");
const nodemailer = require("nodemailer");
const cron = require("node-cron");

const sendMailToAllUser = async (emailObj) => {
  const transporter = await nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: config.emailUser,
      pass: config.emailPassword,
    },
  });
  console.log(emailObj);

  const mailOptions = {
    from: "Node Project",
    to: emailObj,
    subject: "Cron Test Mail",
    html: "<p>Hii This is cron testing mail</p>",
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("Mail has been Sent", info.response);
    }
  });
};

const sendMailAllUser = () => {
  try {
    cron.schedule("*/10 * * * * *", async function () {
      const userData = await User.find({});
      if (userData.length > 0) {
        const emails = [];
        userData.map((key) => {
          emails.push(key.email);
        });
        sendMailToAllUser(emails);
        // console.log(emails);
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = sendMailAllUser;

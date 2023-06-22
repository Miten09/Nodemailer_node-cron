const express = require("express");
const app = express();
const cron = require("node-cron");
const fs = require("fs");
const mongoose = require("mongoose");

// File data added at every 10 seconds

// cron.schedule("*/10 * * * * *", function () {
//   let data = "Hi cron job is running\n";
//   fs.appendFile("logs.txt", data, function (err) {
//     if (err) {
//       throw err;
//     }
//     console.log("File data added");
//   });
// });

mongoose
  .connect(
    "mongodb+srv://Miten:MiHaKrRa88@projects.hpzcfyg.mongodb.net/all_email?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connection established");
  })
  .catch((error) => {
    console.log(error);
  });

const customCron = require("./crone");

customCron();

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

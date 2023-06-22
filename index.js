const express = require("express");
const app = express();
const cron = require("node-cron");
const moment = require("moment");

app.get("/", (req, res) => {
  res.send("Get Request");
});

app.listen(4000, () => {
  console.log("server start");
});

// This node-crone is used if we want to wish independence day on every 15th august then we have to set it accordingly

// cron.schedule(" * * * * * * ", () => {
//   console.log(
//     "running task every second",
//     moment().format("DD MM YYYY HH:MM:SS")
//   );
// });

// cron.schedule(" */10 * * * * * ", () => {
//   console.log(
//     "running task every second/10",
//     moment().format("DD MM YYYY HH:MM:SS")
//   );
// });

// cron.schedule(" 5-10 * * * * * ", () => {
//   console.log(
//     "running task every 5-10 seconds",
//     moment().format("DD MM YYYY HH:MM:SS")
//   );
// });

// cron.schedule(" 5,15,29  * * * * ", () => {
//   console.log(
//     "running task every 5,15,29 minute",
//     moment().format("DD MM YYYY hh:mm:ss")
//   );
// });

// const task = cron.schedule(
//   " * * * * * * ",
//   () => {
//     console.log(
//       "running task every second",
//       moment().format("DD MM YYYY hh:mm:ss")
//     );
//   },
//   {
//     scheduled: false,
//     timezone: "Asia/kolkata",
//   }
// );
// task.start();
// task.stop();

// Schedule time to 15th August at 9:00 AM

cron.schedule(
  "0 9 15 Aug * ",
  () => {
    // SEND EMAIL CODE
    console.log(
      "running task at 15th August",
      moment().format("DD MM YYYY hh:mm:ss")
    );
  },
  {
    timezone: "Asia/Kolkata",
  }
);

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

// const cookieRouter = require("./routes/cookieRouter");
const indexRouter = require("./routes/indexRouter");
const interactionRouter = require("./routes/interactionRouter");
const mentorTeamRouter = require("./routes/mentorTeamRouter");
const userRouter = require("./routes/userRouter");
const { restart } = require("nodemon");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("1234"));

// // middleware to check cookie
// function authenticateUser(req, res, next) {
//   if (req.signedCookies.user)
//     next();
//   } else {
//     res.json({ success: false });
//   }
// }

// app.use("/", authenticateUser, cookieRouter);
app.use("/", indexRouter);

app.use("/interaction", interactionRouter);
app.use("/mentor-team", mentorTeamRouter);
app.use("/user", userRouter);

module.exports = app;

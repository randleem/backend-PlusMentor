const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const cookieRouter = require("./routes/cookieRouter");
const indexRouter = require("./routes/indexRouter");
const interactionRouter = require("./routes/interactionRouter");
const mentorTeamRouter = require("./routes/mentorTeamRouter");
const userRouter = require("./routes/userRouter");
const { restart } = require("nodemon");

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("1234"));

// middleware to check cookie
function authenticateUser(req, res, next) {
  console.log("1");
  if (req.cookies.user) {
    console.log("2");
    next();
  } else {
    res.json({ success: false });
  }
}

app.use("/", cookieRouter);
app.use("/randomTip", authenticateUser, indexRouter);
app.use("/interaction", authenticateUser, interactionRouter);
app.use("/mentor-team", authenticateUser, mentorTeamRouter);
app.use("/user", authenticateUser, userRouter);

module.exports = app;
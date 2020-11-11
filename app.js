const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const cookieRouter = require("./routes/cookieRouter");
const interactionRouter = require("./routes/interactionRouter");
const mentorTeamRouter = require("./routes/mentorTeamRouter");
const userRouter = require("./routes/userRouter");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("1234"));

app.use("/", cookieRouter);
app.use("/interaction", interactionRouter);
app.use("/mentor-team", mentorTeamRouter);
app.use("/user", userRouter);

module.exports = app;

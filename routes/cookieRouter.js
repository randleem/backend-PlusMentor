const express = require("express");
const router = express.Router();

router.post("/", async function (req, res, next) {
  const { username, password } = req.body;
  try {
    let cookie_Stuff = req.signedCookies.user;
    //But the user is logging in for the first time so there won't be any appropriate signed cookie for usage.
    if (!cookie_Stuff) {
      //True for our case
      let auth_Stuff = req.headers.authorization;
      if (!auth_Stuff) {
        //No authentication info given
        res.setHeader("WWW-Authenticate", "Basic");
        console.log(req.headers);
        res.sendStatus(401);
      } else {
        step1 = new Buffer.from(auth_Stuff.split(" ")[1], "base64");
        //Extracting username:password from the encoding Authorization: Basic username:password
        step2 = step1.toString().split(":");
        //Extracting the username and password in an array
        if (step2[0] == "admin" && step2[1] == "admin") {
          //Correct username and password given
          console.log("WELCOME ADMIN");
          //Store a cookie with name=user and value=username
          res.cookie("user", "admin", { signed: true });
          res.send("Signed in the first time");
        } else {
          //Wrong authentication info, retry
          res.setHeader("WWW-Authenticate", "Basic");
          res.sendStatus(401);
        }
      }
    } else {
      //Signed cookie already stored
      if (req.signedCookies.user == "admin") {
        res.send("HELLO GENUINE USER");
      } else {
        //Wrong info, user asked to authenticate again
        res.setHeader("WWW-Authenticate", "Basic");
        res.sendStatus(401);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

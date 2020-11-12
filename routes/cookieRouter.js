const express = require("express");
const router = express.Router();
const { query } = require("../db/index");

router.get("/", async function (req, res, next) {
  try {
    let cookie_Stuff = req.signedCookies.user;
    //But the user is logging in for the first time so there won't be any appropriate signed cookie for usage.
    // console.log(req.signedCookies.user);
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
        let username = step2[0];
        let password = step2[1];

        // get user data to check for username and password
        let dbstuff = await getAllUsers();
        let mappedStuff = dbstuff.map(displayRow);

        // check username matches password
        if (containsUserAndPass(mappedStuff, username, password)) {
          // if (step2[0] == "admin" && step2[1] == "admin") {
          //Correct username and password given
          console.log("Welcome " + step2[0]);
          //Store a cookie with name=user and value=username
          res.cookie("user", username, { signed: true });

          res.send(step2[0] + " has signed in for the first time");
        } else {
          //Wrong authentication info, retry
          res.setHeader("WWW-Authenticate", "Basic");
          res.sendStatus(401);
        }
      }
    } else {
      //Signed cookie already stored
      if (req.signedCookies.user) {
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

async function getAllUsers() {
  const result = await query(`SELECT * FROM user_table;`);
  return result.rows;
}

function displayRow(array) {
  return array;
}

function containsUserAndPass(usersArray, username, password) {
  // console.log({ usersArray, username, password });

  const validMatches = usersArray.filter(
    (e) => e.email === username && e.password === password
  );

  if (validMatches.length > 0) {
    return true;
  }
  return false;
}

module.exports = router;

const express = require("express");
const router = express.Router();

const { createUser } = require("../models/users");

// POST
router.post("/", async function (req, res, next) {
  try {
    const user = req.body;
    console.log(user);
    const result = await createUser(user);
    res.json({ success: true });
    console.log("created user with email: " + result[0].email);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();

const { getAllInteractions } = require("../models/interaction");

router.get("/interactions", async function (req, res, next) {
    try {
      const interactions = await getAllInteractions();
      res.json({ success: true, data: interactions });
    } catch (err) {
      console.log(err);
    }
  });

  module.exports = router;

  // RANDLE TEST
const express = require("express");
const router = express.Router();

const { getAllTips, createTip, getRandomTip } = require("../models/tips");

router.get("/randomTip", async function (req, res, next) {
  try {
    const tips = await getRandomTip();
    res.json({ success: true, data: tips });
  } catch (err) {
    console.log(err);
  }
});

router.post("/createTip", async function (req, res, next) {
  try {
    const { tip } = req.body;
    const result = await createTip(tip);
    res.json({ success: true, valueInserted: result });
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async function (req, res, next) {
  try {
    const tips = await getAllTips();
    res.json({ success: true, data: tips });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

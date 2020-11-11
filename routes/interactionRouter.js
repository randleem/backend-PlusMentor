const express = require("express");
const router = express.Router();

const {
  getAllInteractions,
  getInteractionById,
  createInteraction,
} = require("../models/interaction");

// GET all
router.get("/", async function (req, res, next) {
  try {
    const result = await getAllInteractions();
    res.json({ success: true, data: result });
  } catch (err) {
    console.log(err);
  }
});

// GET by id
router.get("/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const result = await getInteractionById(id);
    res.json({ success: true, data: result });
  } catch (err) {
    console.log(err);
  }
});

// POST
router.post("/", async function (req, res, next) {
  try {
    const interaction = req.body;
    const result = await createInteraction(interaction);
    res.json({ success: true });
    console.log("created row with topic: " + result[0].topic);
  } catch (err) {
    console.log(err);
  }
});

// PATCH
router.patch("/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const interaction = req.body;
    const result = await createInteraction(interaction, id);
    res.json({ success: true });
    console.log("patched row with topic: " + result[0].topic);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

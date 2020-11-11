const express = require("express");
const router = express.Router();

const {
  getAllMentorTeams,
  getMentorTeamById,
  createMentorTeam,
  updateMentorTeam,
} = require("../models/mentorTeam");

// GET all
router.get("/", async function (req, res, next) {
  try {
    const result = await getAllMentorTeams();
    res.json({ success: true, data: result });
  } catch (err) {
    console.log(err);
  }
});

// GET by id
router.get("/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const result = await getMentorTeamById(id);
    res.json({ success: true, data: result });
  } catch (err) {
    console.log(err);
  }
});

//Create Mentor Team
router.post("/", async function (req, res, next) {
  try {
    const team = req.body;
    const result = await createMentorTeam(team);
    res.json({ success: true });
    console.log("created team: " + result[0].team_id);
  } catch (err) {
    console.log(err);
  }
});

// Patch mentor Team
router.patch("/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const update = req.body;
    const result = await updateMentorTeam(update, id);
    res.json({ success: true });
    console.log("patched team: " + result[0].team_id);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

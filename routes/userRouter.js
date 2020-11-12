const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
} = require("../models/users");

// GET all
router.get("/", async function (req, res, next) {
  try {
    const result = await getAllUsers();
    res.json({ success: true, data: result });
  } catch (err) {
    console.log(err);
  }
});

// GET by id
router.get("/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const result = await getUserById(id);
    res.json({ success: true, data: result });
  } catch (err) {
    console.log(err);
  }
});

// GET by email
router.get("/", async function (req, res, next) {
  try {
    let email = req.query.email;
    console.log(firstname);
    const result = await getUserByEmail(firstname);
    res.json({ success: true, data: result });
  } catch (err) {
    console.log(err);
  }
});

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

// PATCH
router.patch("/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const update = req.body;
    const result = await updateUser(update, id);
    res.json({ success: true });
    console.log("patched user with email: " + result[0].email);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

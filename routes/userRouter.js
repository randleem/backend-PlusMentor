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
  console.log("14: " + req.session.name);
  const { email } = req.query;
  try {
    if (email) {
      const result = await getUserByEmail(email);
      res.json({ success: true, data: result });
    } else {
      const result = await getAllUsers();

      res.json({ success: true, data: result });
    }
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

// // GET by firstname
// router.get("/", async function (req, res, next) {
//   try {
//     let firstname = req.query.firstname;
//     console.log(firstname);
//     const result = await getUserByEmail(firstname);
//     res.json({ success: true, data: result });
//   } catch (err) {
//     console.log(err);
//   }
// });

// POST
router.post("/", async function (req, res, next) {
  try {
    const user = req.body;
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

const { query } = require("../db");

// GET
async function getAllUsers() {
  const result = await query(`SELECT * FROM user_table;`);
  console.log(result.rows);
  return result.rows;
}

// GET by ID
async function getUserById(id) {
  const result = await query(`SELECT * FROM user_table WHERE user_id = $1;`, [
    id,
  ]);
  console.log(result.rows);
  return result.rows;
}

// GET by email
async function getUserByEmail(email) {
  console.log("21: " + email);
  const result = await query(`SELECT * FROM user_table WHERE email = $1;`, [
    email,
  ]);
  console.log(result.rows);
  return result.rows;
}

// POST
async function createUser({ email, first_name, last_name, pair_id, role }) {
  const result = await query(
    `INSERT INTO user_table (email, first_name, last_name, pair_id, role)
    VALUES ($1, $2, $3, $4, $5) RETURNING email;`,
    [email, first_name, last_name, pair_id, role]
  );
  return result.rows;
}

// PATCH

async function updateUser({ email, first_name, last_name, pair_id, role }, id) {
  const result = await query(
    `UPDATE user_table SET email=COALESCE($1, email), first_name=COALESCE($2, first_name), last_name=COALESCE($3, last_name), pair_id=COALESCE($4, pair_id), role=COALESCE($5, role) WHERE (user_id = $6) RETURNING email;`,
    [email, first_name, last_name, pair_id, role, id]
  );
  console.log(result.rows);
  return result.rows;
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
};

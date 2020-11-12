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
  const result = await query(`SELECT * FROM user_table WHERE email = $1;`, [
    email,
  ]);
  console.log(result.rows);
  return result.rows;
}

// POST
async function createUser({
  email,
  first_name,
  last_name,
  team_id,
  role,
  password,
}) {
  const result = await query(
    `INSERT INTO user_table (email, first_name, last_name, team_id, role, password)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING email;`,
    [email, first_name, last_name, team_id, role, password]
  );
  return result.rows;
}

// PATCH

async function updateUser({ email, first_name, last_name, team_id, role }, id) {
  const result = await query(
    `UPDATE user_table SET email=COALESCE($1, email), first_name=COALESCE($2, first_name), last_name=COALESCE($3, last_name), team_id=COALESCE($4, team_id), role=COALESCE($5, role) WHERE (user_id = $6) RETURNING email;`,
    [email, first_name, last_name, team_id, role, id]
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

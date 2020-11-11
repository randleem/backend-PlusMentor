const { query } = require("../db");

// GET
async function getAllInteractions() {
  const result = await query(`SELECT * FROM interaction_table;`);
  console.log(result.rows);
  return result.rows;
}

// GET by ID
async function getInteractionById(id) {
  const result = await query(
    `SELECT * FROM interaction_table WHERE interaction_id = $1;`,
    [id]
  );
  console.log(result.rows);
  return result.rows;
}

// POST
async function createInteraction({ date, topic, discussion, pair_id }) {
  const result = await query(
    `INSERT INTO interaction_table (date, topic, discussion, pair_id)
    VALUES ($1, $2, $3, $4) RETURNING topic;`,
    [date, topic, discussion, pair_id]
  );
  return result.rows;
}

// PATCH

async function updateInteraction({ date, topic, discussion, pair_id }, id) {
  const result = await query(
    `UPDATE interaction_table SET date=COALESCE($1, date), topic=COALESCE($2, topic), discussion=COALESCE($3, discussion), pair_id=COALESCE($4, pair_id) WHERE (interaction_id = $5) RETURNING topic;`,
    [date, topic, discussion, pair_id, id]
  );
  console.log(result.rows);
  return result.rows;
}

module.exports = {
  getAllInteractions,
  getInteractionById,
  updateInteraction,
  createInteraction,
};

// Hello Emma

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

// Get Interactions by Date
async function getInteractionsByDate(date) {
  const result = await query(
    `SELECT * FROM interaction_table WHERE date = $1;`,
    [date]
  );
}

// Get Interactions by Topic
async function getInteractionByTopic(topic) {
  const result = await query(
    `SELECT * FROM interaction_table WHERE topic = $1;`,
    [topic]
  );
}

// Get Interactions by Discussion
async function getInteractionByDiscussion(discussion) {
  const result = await query(
    `SELECT * FROM interaction_table WHERE discussion = $1;`,
    [discussion]
  );
}

// Get Interactions by Team_id
async function getInteractionByTeamID(team_id) {
  const result = await query(
    `SELECT * FROM interaction_table WHERE team_id = $1;`,
    [team_id]
  );
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
  getInteractionsByDate,
  getInteractionByTopic,
  getInteractionByDiscussion,
  getInteractionByTeamID,
};

// Hello Emma

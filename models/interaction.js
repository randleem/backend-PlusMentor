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
  return result.rows;
}

// Get Interactions by Topic
async function getInteractionByTopic(topic) {
  const result = await query(
    `SELECT * FROM interaction_table WHERE topic = $1;`,
    [topic]
  );
  return result.rows;
}

// Get Interactions by Discussion
async function getInteractionByDiscussion(discussion) {
  const result = await query(
    `SELECT * FROM interaction_table WHERE discussion = $1;`,
    [discussion]
  );
  return result.rows;
}

// Get Interactions by Team_id
async function getInteractionByTeamID(team_id) {
  const result = await query(
    `SELECT * FROM interaction_table WHERE team_id = $1;`,
    [team_id]
  );
  return result.rows;
}

// Get Interactions by email
async function getInteractionByEmail(email) {
  const result = await query(
    `SELECT interaction_table.date, interaction_table.topic, interaction_table.discussion FROM interaction_table INNER JOIN
    user_table ON (interaction_table.team_id = user_table.team_id) WHERE user_table.email LIKE $1;`,
    [email]
  );
  return result.rows;
}

// POST
async function createInteraction({ date, topic, discussion, team_id }) {
  const result = await query(
    `INSERT INTO interaction_table (date, topic, discussion, team_id)
    VALUES ($1, $2, $3, $4) RETURNING topic;`,
    [date, topic, discussion, team_id]
  );
  return result.rows;
}

// PATCH

async function updateInteraction({ date, topic, discussion, team_id }, id) {
  const result = await query(
    `UPDATE interaction_table SET date=COALESCE($1, date), topic=COALESCE($2, topic), discussion=COALESCE($3, discussion), team_id=COALESCE($4, team_id) WHERE (interaction_id = $5) RETURNING topic;`,
    [date, topic, discussion, team_id, id]
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
  getInteractionByEmail,
};

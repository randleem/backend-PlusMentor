const { query } = require("../db");

// GET
async function getAllMentorTeams() {
  const result = await query(`SELECT * FROM mentor_team_table;`);
  console.log(result.rows);
  return result.rows;
}

// GET mentorTeam by ID
async function getMentorTeamById(id) {
  const result = await query(
    `SELECT * FROM mentor_team_table WHERE team_id = $1;`,
    [id]
  );
  console.log(result.rows);
  return result.rows;
}

// POST Create Mentor Team
async function createMentorTeam({ mentor_id, mentee_id }) {
  const result = await query(
    `INSERT INTO mentor_team_table (mentor_id, mentee_id)
      VALUES ($1, $2) RETURNING team_id;`,
    [mentor_id, mentee_id]
  );
  return result.rows;
}

// PATCH update Mentor Team

async function updateMentorTeam({ mentor_id, mentee_id }, id) {
  const result = await query(
    `UPDATE mentor_team_table SET mentor_id=COALESCE($1, mentor_id), mentee_id=COALESCE($2, mentee_id) WHERE (team_id= $3) RETURNING team_id;`,
    [mentor_id, mentee_id, id]
  );
  console.log(result.rows);
  return result.rows;
}

module.exports = {
  getAllMentorTeams,
  getMentorTeamById,
  createMentorTeam,
  updateMentorTeam,
};

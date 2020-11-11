const { query } = require("../../index");

async function createMentorTeamTable() {
  const res = await query(
    `CREATE TABLE IF NOT EXISTS mentor_team_table (
            team_id SERIAL PRIMARY KEY,
            mentor_id INT,
            mentee_id INT
            )`
  );

  console.log("created mentor_team_table");
}

createMentorTeamTable();

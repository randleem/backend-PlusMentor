const { query } = require("../../index");

async function createMentorTeamTable() {
  const res = await query(
    `CREATE TABLE IF NOT EXISTS mentor_team_table (
            user_id SERIAL PRIMARY KEY,
            mentor TEXT,
            mentee TEXT,
            )`
  );

  console.log("created mentor_team_table");
}

createMentorTeamTable();

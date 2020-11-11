const { query } = require("../../index");

async function dropMentorTeamTable() {
  await query(`DROP TABLE IF EXISTS mentor_team_table`);
  console.log(`The table has been dropped`);
}

dropMentorTeamTable();

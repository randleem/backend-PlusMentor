const { query } = require("../../index");

const exampleTeam = [
  {
    mentor_id: 2,
    mentee_id: 1,
  },
  {
    mentor_id: 2,
    mentee_id: 3,
  },
  {
    mentor_id: 2,
    mentee_id: 4,
  },
];

async function populateMentorTeamTable(array) {
  for (let i = 0; i < array.length; i++) {
    const { mentor_id, mentee_id } = array[i];
    await query(
      `INSERT INTO mentor_team_table (
        mentor_id,
        mentee_id
        ) VALUES ($1, $2)`,
      [mentor_id, mentee_id]
    );

    console.log(
      `Log:Your new Mentor Team has been set up with ${mentor_id} + ${mentee_id}`
    );
  }
}

populateMentorTeamTable(exampleTeam);

const { query } = require("../../index");

const exampleInteraction = [
  {
    date: `2020-11-10`,
    topic: `SQL Databases - how to create a table`,
    discussion: `We've had a discussion about how to create tables and looked up the docs online`,
    team_id: 1,
  },
  {
    date: `2020-11-09`,
    topic: `Discuss interview experience`,
    discussion: "",
    team_id: 1,
  },
];

async function populateInteractionTable(array) {
  for (let i = 0; i < array.length; i++) {
    const { date, topic, discussion, team_id } = array[i];
    await query(
      `INSERT INTO interaction_table (
        date,
        topic,
        discussion,
        team_id
        ) VALUES ($1, $2, $3, $4)`,
      [date, topic, discussion, team_id]
    );

    console.log(`Log:Populated table with ${topic}`);
  }
}

populateInteractionTable(exampleInteraction);

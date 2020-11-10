const { query } = require("../../index");

async function createInteractionTable() {
  const res = await query(
    `CREATE TABLE IF NOT EXISTS interaction_table (
            interaction_id SERIAL PRIMARY KEY,
            date DATE,
            topic TEXT,
            discussion TEXT,
            pair_id INT
            )`
  );

  console.log("created interaction_table");
}

createInteractionTable();

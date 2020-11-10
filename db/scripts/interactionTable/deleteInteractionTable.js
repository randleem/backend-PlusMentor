const { query } = require("../../index");

async function dropInteractionTable() {
  await query(`DROP TABLE IF EXISTS interaction_table`);
  console.log(`The interaction table has been dropped`);
}

dropInteractionTable();

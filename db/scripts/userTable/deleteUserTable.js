const { query } = require("../../index");

async function dropUserTable() {
  await query(`DROP TABLE IF EXISTS user_table`);
  console.log(`The table has been dropped`);
}

dropUserTable();

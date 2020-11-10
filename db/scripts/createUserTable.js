const { query } = require("../index");

async function createUserTable() {
  const res = await query(
    `CREATE TABLE IF NOT EXISTS user_table (
            user_id SERIAL PRIMARY KEY,
            email TEXT,
            first_name TEXT,
            last_name TEXT,
            pairId INT,
            role TEXT
            )`
  );

  console.log("created user_table");
}

createUserTable();

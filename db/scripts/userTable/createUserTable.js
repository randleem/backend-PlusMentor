const { query } = require("../../index");

async function createUserTable() {
  const res = await query(
    `CREATE TABLE IF NOT EXISTS user_table (
            user_id SERIAL PRIMARY KEY,
            email TEXT,
            first_name TEXT,
            last_name TEXT,
            team_id INT,
            role TEXT,
            password TEXT
            )`
  );

  console.log("created user_table");
}

createUserTable();

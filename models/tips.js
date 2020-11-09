const { query } = require("../db");

async function getAllTips() {
  const result = await query(`SELECT * FROM tips;`);
  console.log(result.rows);
  return result.rows;
}

async function createTip(tip) {
  const result = await query(
    `INSERT INTO tips (tip)
  VALUES ($1);`,
    [tip]
  );
  return result.rows;
}

module.exports = {
  getAllTips,
  createTip,
};

const { query } = require("../db");

async function getAllTips() {
  const result = await query(`SELECT * FROM tips;`);
  console.log(result.rows);
  return result.rows;
}

async function getRandomTip() {
  const result = await query(`SELECT * FROM tips ORDER BY RANDOM() LIMIT 1;`);
  console.log(result.rows);
  return result.rows;
}

async function createTip(tip) {
  console.log("this is line 16: " + tip);
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
  getRandomTip,
};

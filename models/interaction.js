const { query } = require("../db");

async function getAllInteractions() {
    const result = await query(`SELECT * FROM interaction_table;`);
    console.log(result.rows);
    return result.rows;
  }


  module.exports = {
    getAllInteractions,
  };
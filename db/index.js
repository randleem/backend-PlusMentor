const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  ssl: true,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};

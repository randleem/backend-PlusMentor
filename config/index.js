// const credentials = {
//   user: process.env.PGUSER,
//   host: process.env.PGHOST,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,
//   port: process.env.PGPORT,
//   ssl: true,
// };

const credentials = {
connectionString: process.env.DATABASE_URL,
};

module.exports = { credentials };

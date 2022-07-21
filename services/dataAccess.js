const Pool = require("pg").Pool;
const fs = require("fs");

password = fs.readFileSync(
  "/Users/keyinstudent/Documents/pg_password.txt",
  function (err, data) {
    if (err) throw err;
    else return data;
  }
);

const pool = new Pool({
  user: "dominic",
  host: "localhost",
  database: "dvdrental",
  password: `${password}`,
  port: 5432,
});

module.exports = pool;

const fs = require("fs");

password = fs.readFileSync(
  "Users/keyinstudent/Documents/pg_password.txt",
  function (err, data) {
    if (err) throw err;
    else return data;
  }
);

console.log(password);

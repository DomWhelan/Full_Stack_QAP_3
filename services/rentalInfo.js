const db = require("./dataAccess");

const store1TopRentals = function () {
  return new Promise(function (resolve, reject) {
    const sql = 'SELECT * FROM public."top10RentsStore1"';
    db.query(sql, [], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

const store2TopRentals = function () {
  return new Promise(function (resolve, reject) {
    const sql = 'SELECT * FROM public."top10RentsStore2"';
    db.query(sql, [], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

module.exports = {
  store1TopRentals,
  store2TopRentals,
};

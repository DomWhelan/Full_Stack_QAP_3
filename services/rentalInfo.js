const db = require("./dataAccess");

// Function to retrieve a pre-populated view from Postgres database "dvdrental"
// This view provides the top 10 rentals based on rental_total for "store 1"
const store1TopRentals = function () {
  return new Promise(function (resolve, reject) {
    const sql = 'SELECT * FROM public."top10RentsStore1"';
    db.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

// Function to retrieve a pre-populated view from Postgres database "dvdrental"
// This view provides the top 10 rentals based on rental_total for "store 2"
const store2TopRentals = function () {
  return new Promise(function (resolve, reject) {
    const sql = 'SELECT * FROM public."top10RentsStore2"';
    db.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

// Function to retrieve a pre-populated view from Postgres database "dvdrental"
// This view provides a list of rental titles, rental_dates and customer info
// This function also filters this view by a given customer_id
const getRentalsByID = function (id) {
  if (DEBUG) console.log("getRentalsByID() " + id);
  return new Promise(function (resolve, reject) {
    const sql = `SELECT * FROM public."rentalsByCustomer"
    WHERE customer_id = ${id} AND rental_date > (CURRENT_DATE - '1 year'::interval)`;
    db.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        if (DEBUG) console.log(result);
        resolve(result.rows);
      }
    });
  });
};

const getRentalsDue = function () {
  if (DEBUG) console.log("getRentalsDue()");
  return new Promise(function (resolve, reject) {
    const sql = `SELECT * FROM public."rentalsByCustomer"
    WHERE return_date > CURRENT_DATE ORDER BY return_date ASC LIMIT 50`;
    db.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        if (DEBUG) console.log(result);
        resolve(result.rows);
      }
    });
  });
};

module.exports = {
  store1TopRentals,
  store2TopRentals,
  getRentalsByID,
  getRentalsDue,
};

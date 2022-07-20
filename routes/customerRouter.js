const express = require("express");
const router = express.Router();

router.use(express.static("public"));

const { getRentalsByID } = require("../services/rentalInfo");

router.get("/", async (req, res) => {
  if (DEBUG) console.log("Request Method: " + req.method);
  if (DEBUG) console.log("Requested customer page");
  res.render("customer", { title: "My SQL Video" });
});

router.get("/id", async (req, res) => {
  if (DEBUG) console.log("Request Method: " + req.method);
  if (DEBUG) console.log("Requested rentalsByID page");
  if (DEBUG) console.log("ID: " + req.query.id);
  let customer = await getRentalsByID(req.query.id);
  res.render("rentalsByID", { title: "Rental History", moment, customer });
});

module.exports = router;

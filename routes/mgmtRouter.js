const express = require("express");
const router = express.Router();

router.use(express.static("public"));

// Installed package to format time objects
// const moment = require("moment");

const { getRentalsDue } = require("../services/rentalInfo");

router.get("/", async (req, res) => {
  if (DEBUG) console.log("Request Method: " + req.method);
  if (DEBUG) console.log("Requested mgmt page");
  res.render("mgmt", { title: "For Management Only" });
});

router.get("/rentalsDue", async (req, res) => {
  if (DEBUG) console.log("Request Method: " + req.method);
  if (DEBUG) console.log("Requested rentalsDue page");
  let rentalsDue = await getRentalsDue();
  res.render("rentalsDue", {
    title: "Rentals Due for Return",
    rentalsDue,
  });
});

module.exports = router;

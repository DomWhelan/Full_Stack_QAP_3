const express = require("express");
const router = express.Router();

router.use(express.static("public"));

const {
  store1TopRentals,
  store2TopRentals,
} = require("../services/rentalInfo");

router.get("/", async (req, res) => {
  if (DEBUG) console.log("Request Method: " + req.method);
  if (DEBUG) console.log("Requested topRentals page");
  res.render("topRentals", {
    title: "Top Rentals",
  });
});

router.get("/top10Store1", async (req, res) => {
  if (DEBUG) console.log("Request Method: " + req.method);
  if (DEBUG) console.log("Requested top10Store1 page");
  let top10 = await store1TopRentals();
  res.render("top10Store1", {
    title: "Store 1 - Top Rentals",
    top10,
  });
});

router.get("/top10Store2", async (req, res) => {
  if (DEBUG) console.log("Request Method: " + req.method);
  if (DEBUG) console.log("Requested top10Store2 page");
  let top10 = await store2TopRentals();
  res.render("top10Store2", {
    title: "Store 2 - Top Rentals",
    top10,
  });
});

module.exports = router;

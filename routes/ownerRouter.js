const express = require("express");
const router = express.Router();

router.use(express.static("public"));

const {
  store1TopRentals,
  store2TopRentals,
} = require("../services/rentalInfo");

router.get("/top10Store1", async (req, res) => {
  let top10 = await store1TopRentals();
  if (DEBUG) console.log(top10);
  res.render("top10Store1", {
    title: "Store 1 - Top Rentals",
    top10,
  });
});

router.get("/top10Store2", async (req, res) => {
  let top10 = await store2TopRentals();
  if (DEBUG) console.log(top10);
  res.render("top10Store2", {
    title: "Store 2 - Top Rentals",
    top10,
  });
});

module.exports = router;

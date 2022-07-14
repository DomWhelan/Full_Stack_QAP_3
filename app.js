const express = require("express");
const app = express();

global.DEBUG = true;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server running on Port 3000");
});

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

const { store1TopRentals } = require("./services/rentalInfo");

app.get("/top10Store1", async (req, res) => {
  let top10 = await store1TopRentals();
  if (DEBUG) console.log(top10);
  res.render("top10Store1", {
    title: "Store 1 - Top Rentals",
    top10,
  });
});

app.use((req, res) => {
  res.status(404);
  res.render("404");
});

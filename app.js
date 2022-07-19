const express = require("express");
const app = express();

const moment = require("moment");

global.DEBUG = true;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server running on Port 3000");
});

app.get("/", (req, res) => {
  if (DEBUG) console.log("Request Method: " + req.method);
  if (DEBUG) console.log("Request URL: " + req.url);
  res.render("index", { title: "Home" });
});

const ownerRouter = require("./routes/ownerRouter");

app.use("/owner", ownerRouter);

const { getRentalsByID, getRentalsDue } = require("./services/rentalInfo");

app.get("/customer", async (req, res) => {
  if (DEBUG) console.log("Request Method: " + req.method);
  if (DEBUG) console.log("Request URL: " + req.url);
  if (DEBUG) console.log("ID: " + req.query.id);
  let customer = await getRentalsByID(req.query.id);
  res.render("rentalsByID", { title: "Rental History", customer });
});
app.get("/rentalsDue", async (req, res) => {
  if (DEBUG) console.log("Request Method: " + req.method);
  if (DEBUG) console.log("Request URL: " + req.url);
  let rentalsDue = await getRentalsDue();
  res.render("rentalsDue", {
    title: "Rentals Due for Return",
    rentalsDue,
    moment,
  });
});

app.use((req, res) => {
  res.status(404);
  res.render("404", { title: "404 - ERROR" });
});

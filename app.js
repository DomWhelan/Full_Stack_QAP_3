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

const adminRouter = require("./routes/adminRouter");

app.use("/admin", adminRouter);

const { getRentalsByID } = require("./services/rentalInfo");

app.get("/customer", async (req, res) => {
  if (DEBUG) console.log("ID: " + req.query.id);
  let customer = await getRentalsByID(req.query.id);
  if (DEBUG) console.log(customer);
  res.render("rentalsByID", { title: "Rental History", customer });
});

app.use((req, res) => {
  res.status(404);
  res.render("404", { title: "404 - ERROR" });
});

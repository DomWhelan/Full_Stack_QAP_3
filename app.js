const express = require("express");
const app = express();

// Installed package to format time objects
var moment = require("moment");
app.locals.moment = moment;

global.DEBUG = false;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server running on Port 3000");
});

app.get("/", (req, res) => {
  if (DEBUG) console.log("Request Method: " + req.method);
  if (DEBUG) console.log("Requested Home page");
  res.render("index", { title: "Home" });
});

const ownerRouter = require("./routes/ownerRouter");

app.use("/owner", ownerRouter);

const customerRouter = require("./routes/customerRouter");

app.use("/customer", customerRouter);

const mgmtRouter = require("./routes/mgmtRouter");

app.use("/mgmt", mgmtRouter);

app.use((req, res) => {
  res.status(404);
  res.render("404", { title: "404 - ERROR" });
});

module.exports = moment;

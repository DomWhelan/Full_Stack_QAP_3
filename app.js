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

app.use((req, res) => {
  res.status(404);
  res.render("404");
});

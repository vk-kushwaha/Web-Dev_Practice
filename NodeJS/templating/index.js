const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/app", (req, res) => {
  res.render("app");
});

app.get("/star", (req, res) => {
  res.render("star");
});
app.listen("8080", () => {
  console.log("Server connected at port 8080");
});

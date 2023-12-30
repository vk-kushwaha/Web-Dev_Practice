const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/search", express.static(path.join(__dirname, "public")));
app.get("/search", (req, res) => {
  res.render("search");
});
app.listen("9090", () => {
  console.log("server connected at port 9090");
});

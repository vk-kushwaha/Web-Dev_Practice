const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public"))); //for static file

app.get("/whatever", (req, res) => {
  res.render("whatever");
});

let port = 8080;
app.listen(port, () => {
  console.log("Server is connected at port : 8080");
});

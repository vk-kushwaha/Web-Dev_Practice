const express = require("express");
const app = express();
const path = require("path");

app.set("veiw engine", "ejs");
app.set("veiws", path.join(__dirname, "veiws"));

app.get("/app", (req, res) => {
  res.render("app");
  //   res.send("hello");
});
app.listen(8080, () => {
  console.log("server connected to port number 8080");
});

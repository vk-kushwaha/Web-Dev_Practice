const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server connected at port : ${PORT}`);
});

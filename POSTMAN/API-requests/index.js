const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("getting response from server");
});

app.post("/", (req, res) => {
  res.send("posting on the server");
});
app.listen("8080", () => {
  console.log("serve connected at port No 8080");
});

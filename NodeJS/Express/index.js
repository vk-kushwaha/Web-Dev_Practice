const express = require("express");
const app = express();
// console.log(app);

app.use("/cat", (req, res, next) => {
  console.log("Hi i am cat req");
  next();
});

app.get("/cat", (req, res) => {
  res.send("<h1>Ab aja maindan me</h1>");
});

// default response for all other request.

app.get("*", (req, res) => {
  res.send("<h1> Error: Page not found: 404 </h1>");
});

app.listen(8080, () => {
  console.log("server connected");
});

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const seedDB = require("./seed");
const productroutes = require("./routes/product");
const methodOverride = require("method-override");

mongoose
  .connect("mongodb://127.0.0.1:27017/Ecommerce-Site")
  .then((result) => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("Error is : ", err);
  });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true })); //form data body parser
app.use(methodOverride("_method"));
app.use(productroutes);

// seedDB(); // commecnt nhi kiya to bar bar same data store ho jayega.
let PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server connected at port : ${PORT}`);
});

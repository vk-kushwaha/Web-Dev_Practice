const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Class-1");
const { Schema } = mongoose;
const Students = new Schema({
  name: String,
  rollNO: Number,
});

const Student = mongoose.model("Student", Students);

const Student1 = new Student({ name: "rajat", rollNO: 1 });
Student1.save();
const Student2 = new Student({ name: "Rohit", rollNO: 2 });
Student2.save();
app.listen(8080, () => {
  console.log("Server connected at port 8080");
});

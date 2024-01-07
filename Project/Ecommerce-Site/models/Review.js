const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  img: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    min: 0,
    required: true,
  },
  desc: {
    type: String,
    trim: true,
  },
});

let Review = mongoose.model("Product", reviewSchema);

module.exports = Product;

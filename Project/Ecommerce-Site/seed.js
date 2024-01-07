const mongoose = require("mongoose");
const Product = require("./models/Product");
const products = [
  {
    name: "Samsung F34",
    img:
      "https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNhbXN1bmclMjBtMzQlMjBtb2JpbGV8ZW58MHx8MHx8fDA%3D",
    price: 18999,
    desc: "Lowest 5G phone",
  },
  {
    name: "Noice Colour watch ",
    img:
      "https://media.istockphoto.com/id/1138086009/photo/fitness-tracker-smart-watch-in-blue-background.jpg?s=612x612&w=is&k=20&c=ThbHplpXxE1N33IZpY8b_SSZL_Qc9NDnG2B7BwhIhlg=",
    price: 2999,
    desc: " The ultimate choice for youngsters",
  },
  {
    name: "Realme X Pad",
    img:
      " https://images.unsplash.com/photo-1527698266440-12104e498b76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFibGV0fGVufDB8fDB8fHww",
    price: 27999,
    desc: "Indias first 5G tablet",
  },
];

async function seedDB() {
  await Product.insertMany(products);
  console.log("DB Seeded");
}

module.exports = seedDB;

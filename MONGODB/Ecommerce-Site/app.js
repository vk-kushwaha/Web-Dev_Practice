const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const productRoutes= require('./routes/product');
const reviewRoutes= require('./routes/review');

const seedDB = require('./seed');


mongoose.connect('mongodb://127.0.0.1:27017/Abhi-Laya')
.then(() => {
    console.log('DB connected.');
}).catch((err) => {
    console.log(`Error is` ,err);
});



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true})) 
app.use(methodOverride('_method'))
app.use(productRoutes);
app.use(reviewRoutes);


// seedDB();

let PORT = 8080;
app.listen (PORT, ()=>{
    console.log(`server connected to port no ${PORT}`);
});

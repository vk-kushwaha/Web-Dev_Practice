const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const seedDB = require('./seed');
const reviewRoutes= require('./routes/review');
const productApi= require('./routes/API/productapi');
const productRoutes= require('./routes/product');
const authRoutes= require('./routes/auth');
const cartRoutes= require('./routes/cart');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./model/User');


let configSession= {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires:Date.now() +7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
    }

}


mongoose.connect('mongodb://127.0.0.1:27017/Abhi-Laya')
.then(() => {
    console.log('DB connected.');
}).catch((err) => {
    console.log(`Error is` ,err);
});


// all middlewares

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended:true})) 
app.use(methodOverride('_method'))

app.use(session(configSession));
app.use(flash()); //flash always use after session / because it depends on session

app.use(passport.initialize());
app.use(passport.session());
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// middleware for success and error messages in flash.
app.use((req, res ,next)=>{
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);
app.use(cartRoutes);
app.use(productApi);




// seedDB();    // to enter raw data into our database

let PORT = 8080;
app.listen (PORT, ()=>{
    console.log(`server connected to port no ${PORT}`);
});

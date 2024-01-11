const express = require('express');
const app = express();
const session = require('express-session');


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  }))


  app.get('/', (req, res)=>{
    res.send("Welcome to the session")    
  })



app.listen(2020,()=>{
    console.log('server connected at port 2020');
})
















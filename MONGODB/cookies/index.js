const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


app.use(cookieParser());



app.listen(5050, ()=>{
    console.log('Server connected at 5050');
})

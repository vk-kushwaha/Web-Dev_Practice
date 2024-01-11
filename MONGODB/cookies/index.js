const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


app.use(cookieParser("HelloDear"));


app.get('/', (req , res)=>{
    console.log(req.signedCookies);
    res.send(req.signedCookies)
})

app.get('/setcookies', (req,res)=>{
    res.cookie('mode','dark')
    res.cookie('Location','Indore')
    res.cookie('username','Vicky')
    res.cookie('age','31')
    res.cookie('pass','Auto Updated',{signed:true})
    res.send('Maine cookies bhejd di')

})

app.get('/getcookies', (req,res)=>{

    let {username,age} = req.cookies;
    res.send(`Hi I am ${username} and my age is ${age}`)
})

app.listen(5050, ()=>{
    console.log('Server connected at 5050');
})

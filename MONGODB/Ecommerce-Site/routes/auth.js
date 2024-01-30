const express = require('express');
const User = require('../model/User');
const passport = require('passport');
const router = express.Router();


router.get('/register', (req, res) => {
    res.render('auth/signup' );
})

router.post('/register', async(req, res) => {
    let {username, password,role,email,gender} = req.body;
    let user = new User({username, email,role, gender});
    let newUser = await User.register(user, password);  
    // console.log(newUser);    // to get the user details from database to console window.
    // res.send(newUser)
    res.redirect('/login')
});

router.get('/login', (req, res) => {
    res.render('auth/login');
})

 // to make a login request for the current user.
router.post('/login',
  passport.authenticate('local', 
  {
     failureRedirect: '/login',
     failureMessage: true 
  }),
  function(req, res) {
    req.flash('success',`Welcome Back ${req.user.username}`);
    res.redirect('/products');
  });

  // to make a logout request for the   current     user

  router.get('/logout', (req, res) => {
    req.logout(()=>{
        req.flash('success','Logged out successfully!')
        res.redirect('/login');
    });
   
  });

module.exports= router;

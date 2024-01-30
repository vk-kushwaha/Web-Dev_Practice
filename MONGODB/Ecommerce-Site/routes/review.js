const express = require('express')
const Product = require('../model/Product')
const Review= require('../model/Review');
const { validatereview,isLoggedIn } = require('../middleware');
const router = express.Router();


router.post('/products/:id/rating',isLoggedIn, validatereview, async (req , res)=>{
    try{
        let {rating , comment} = req.body;
        let {id} = req.params;

        let product = await Product.findById(id);
        let review = new Review({rating, comment});
        product.reviews.push(review);

        await product.save();
        await review.save();

        //adding flash msgs
        req.flash('success', 'Review added successfully!')
        res.redirect(`/products/${id}`)
    }
    catch(e){
        
        res.render('error',{err:e.message})
    }
})

module.exports= router;

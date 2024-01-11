const express = require('express')
const Product = require('../model/Product')
const Review= require('../model/Review');
const { validatereview } = require('../middleware');

const router = express.Router();

router.post('/products/:id/rating', validatereview, async (req , res)=>{
    try{
        let {rating , comment} = req.body;
        let {id} = req.params;

        let product = await Product.findById(id);
        let review = new Review({rating, comment});
        product.reviews.push(review);

        await product.save();
        await review.save();
        res.redirect(`/products/${id}`)
    }
    catch(e){
        res.render('error',{err:e.message})
    }
})

module.exports= router;

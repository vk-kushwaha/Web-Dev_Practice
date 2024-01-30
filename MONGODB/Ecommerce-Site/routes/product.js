const express = require('express');
const Product = require('../model/Product');
const review = require('../model/Review');
const { validateproduct, isLoggedIn, isSeller, isProductAuthor} = require('../middleware');
const router  = express.Router();


// Show home page 
router.get('/home', async (req ,res)=>{
    try{
        res.render('home');
    }
    catch(e){
        res.render('error',{err:e.message})
    }
})

// Show Contact page 
router.get('/contact', async (req ,res)=>{
    try{
        res.render('contact');
    }
    catch(e){
        res.render('error',{err:e.message})
    }
})

// Show all products 
router.get('/products', async (req ,res)=>{
    try{
        let products = await Product.find({});
        res.render('products/index', {products});
    }
    catch(e){
        res.render('error',{err:e.message})
    }
})

// Form for adding a new product
router.get('/products/new', isLoggedIn, isSeller,(req ,res)=>{
    try{
        res.render('products/new')
    }
    catch(e){
        res.status(500).render('error',{err:e.message})
    }
});


// post that product to list of products
router.post('/products',isLoggedIn,  validateproduct, async(req,res)=>{
    try{
        let {name , img , price , desc} = req.body; //by default undefined
        // console.log(req.body); (Need to decode before use req.body)
        await Product.create({name , img , price , desc, author:req.user._id}); //automatically db save
        req.flash('success' , 'Product added successfully');
        res.redirect('/products')   
    }
    catch(e){
        res.render('error',{err:e.message})
    }

})

// Show the existing product.
router.get('/products/:id',isLoggedIn, async(req, res)=>{
    try{
        let {id}= req.params;
        let foundProduct = await Product.findById(id).populate('reviews');
        res.render('products/show' , {foundProduct, success:req.flash('msg') });
    }
    catch(e){
        res.render('error',{err:e.message})
    }
})


//Edit the perticular product

router.get('/products/:id/edit', isLoggedIn,isSeller, isProductAuthor,async (req,res)=>{
    try{
        let {id}= req.params;
        let foundProduct = await Product.findById(id);
        
        res.render('products/edit', {foundProduct})
    }
    catch(e){
        res.render('error',{err:e.message})
    }
})

//Updating the product in List

router.patch('/products/:id', isLoggedIn,isSeller, isProductAuthor, async(req ,res)=>{
    try{
        let {id}= req.params;
        let {name , img , price , desc} = req.body; 
        let foundProduct = await Product.findByIdAndUpdate(id, {name,img,price,desc})
        req.flash('success' , 'Product edited successfully');
        res.redirect('/products')
    }
    catch(e){
        res.render('error',{err:e.message})
    }

})

//Deleting an Entry from List...

router.delete('/products/:id' , isLoggedIn, isSeller,isProductAuthor,async(req , res)=>{
    try{
        let {id}= req.params;
        let foundProduct = await Product.findById(id);
        
            for (const ids of foundProduct.reviews) {
                await review.findByIdAndDelete(ids);
            }
        await Product.findByIdAndDelete(id)
        req.flash('success' , 'Product Deleted successfully');
        res.redirect('/products')
    }
    catch(e){
        res.render('error',{err:e.message})
    }

})



module.exports = router;
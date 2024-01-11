const express = require('express');
const Product = require('../model/Product');
const review = require('../model/Review');
const { validateproduct } = require('../middleware');
const router  = express.Router();


// Show all products 
router.get('/products', async (req ,res)=>{
    try{
        let products = await Product.find({});
        res.render('index', {products});
    }
    catch(e){
        res.render('error',{err:e.message})
    }
})

// Form for adding a new product
router.get('/products/new', (req ,res)=>{
    try{
        res.render('new')
    }
    catch(e){
        res.render('error',{err:e.message})
    }
});


// post that product to list of products
router.post('/products',  validateproduct, async(req,res)=>{
    try{
        let {name , img , price , desc} = req.body; //by default undefined
        // console.log(req.body); (Need to decode before use req.body)
        await Product.create({name , img , price , desc}); //automatically db save
        res.redirect('/products')   
    }
    catch(e){
        res.render('error',{err:e.message})
    }

})

// Show the existing product.
router.get('/products/:id', async(req, res)=>{
    try{
        let {id}= req.params;
        let foundProduct = await Product.findById(id).populate('reviews');
        res.render('show', {foundProduct})
    }
    catch(e){
        res.render('error',{err:e.message})
    }
})


//Edit the perticular product

router.get('/products/:id/edit',async (req,res)=>{
    try{
        let {id}= req.params;
        let foundProduct = await Product.findById(id);
        res.render('edit', {foundProduct})
    }
    catch(e){
        res.render('error',{err:e.message})
    }
})

//Updating the product in List

router.patch('/products/:id', async(req ,res)=>{
    try{
        let {id}= req.params;
        let {name , img , price , desc} = req.body; 
        let foundProduct = await Product.findByIdAndUpdate(id, {name,img,price,desc})
        res.redirect('/products')
    }
    catch(e){
        res.render('error',{err:e.message})
    }

})

//Deleting an Entry from List...

router.delete('/products/:id/delete' , async(req , res)=>{
    try{
        let {id}= req.params;
        let foundProduct = await Product.findById(id);
        
            for (const ids of foundProduct.reviews) {
                await xcreview.findByIdAndDelete(ids);
            }
        await Product.findByIdAndDelete(id)
        res.redirect('/products')
    }
    catch(e){
        res.render('error',{err:e.message})
    }

})



module.exports = router;
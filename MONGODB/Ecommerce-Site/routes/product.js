const express = require('express');
const Product = require('../model/Product');
const router  = express.Router();


// Show all products 
router.get('/products', async (req ,res)=>{
    let products = await Product.find({});
    res.render('index', {products});

})

// Form for adding a new product
router.get('/products/new', (req ,res)=>{
    res.render('new')
});


// post that product to list of products
router.post('/products', async(req,res)=>{
    let {name , img , price , desc} = req.body; //by default undefined
    // console.log(req.body); (Need to decode before use req.body)
    await Product.create({name , img , price , desc}); //automatically db save
    res.redirect('/products')
})

// Show the existing product.
router.get('/products/:id', async(req, res)=>{
    let {id}= req.params;
    let foundProduct = await Product.findById(id).populate('reviews');
    res.render('show', {foundProduct})
})


//Edit the perticular product

router.get('/products/:id/edit',async (req,res)=>{
    let {id}= req.params;
    let foundProduct = await Product.findById(id);
    res.render('edit', {foundProduct})
})

//Updating the product in List

router.patch('/products/:id', async(req ,res)=>{
    let {id}= req.params;
    let {name , img , price , desc} = req.body; 
    let foundProduct = await Product.findByIdAndUpdate(id, {name,img,price,desc})
    res.redirect('/products')

})

//Deleting an Entry from List...

router.delete('/products/:id/delete' , async(req , res)=>{
    let {id}= req.params;
   let foundProduct = await Product.findByIdAndDelete(id)
    res.redirect('/products')

})



module.exports = router;
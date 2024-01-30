const express = require('express');
const User = require('../model/User');
const { isLoggedIn } = require('../middleware');
const Product = require('../model/Product');
const router = express.Router();


router.get('/user/cart', isLoggedIn, async (req, res) => {
    const userId = req.user._id;
    let user = await User.findById(userId).populate('cart');
    let totalAmount = user.cart.reduce((sum, curr) => sum + curr.price, 0);
    // console.log(totalAmount); //to get the total value of products in cndol window
    res.render('cart/cart', { user, totalAmount });
})

router.post('/user/:productId/add', isLoggedIn, async (req, res) => {
    const productId = req.params.productId;
    const userId = req.user._id;
    let user = await User.findByIdAndUpdate(userId).populate('cart');
    //  console.log(user,'vicky');
    let product = await Product.findByIdAndUpdate(productId);
    user.cart.push(product);
    await user.save();

    res.redirect('/user/cart');
});

// router.delete('/user/:productId', isLoggedIn, async (req, res) => {
//     try {
//         const productId = req.params.productId;
//         const userId = req.user._id;
//         let user = await User.findByIdAndUpdate(userId).populate('cart');
//         // console.log(user, 'vicky');
//         let product = await Product.findByIdAndUpdate(productId);

//         user.cart.pop(user.cart._id);
//         await user.save();
//         req.flash('success', 'Removed from Cart successfully');
//         res.redirect('/user/cart');
//     }
//     catch (e) {
//         res.render('error', { err: e.message })
//     }

// })

router.delete('/user/:productId', isLoggedIn, async (req, res) => {
    try {
        const productId = req.params.productId;
        const userId = req.user._id;

        // Find the user and populate the 'cart' field
        let user = await User.findById(userId).populate('cart');

        // Find the index of the product in the user's cart
        const productIndex = user.cart.findIndex(item => item._id == productId);

        if (productIndex !== -1) {
            // Remove the product from the cart using splice
            user.cart.splice(productIndex, 1);

            // Save the updated user object
            await user.save();

            req.flash('success', 'Removed from Cart successfully');
        } else {
            req.flash('error', 'Product not found in the cart');
        }

        res.redirect('/user/cart');
    } catch (e) {
        res.render('error', { err: e.message });
    }
});


module.exports = router;

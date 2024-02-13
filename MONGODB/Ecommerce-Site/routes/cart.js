const express = require('express');
const User = require('../model/User');
const { isLoggedIn } = require('../middleware');
const Product = require('../model/Product');
const router = express.Router();
const stripe = require('stripe')('sk_test_51OeMnhSJcDqDNSxKsqKDK68x0gfQzxIep4OSogjqnQRP6XH1dXjSvulE1KWUilkn9yzQ77HGFIP28K7yfzZqG0pT00rJE6ttUH')


// calculating the total amount of items available in cart.
router.get('/user/cart', isLoggedIn, async (req, res) => {
    const userId = req.user._id;
    let user = await User.findById(userId).populate('cart');
    let totalAmount = user.cart.reduce((sum, curr) => sum + curr.price, 0);
    // console.log(totalAmount); //to get the total value of products in cndol window
    res.render('cart/cart', { user, totalAmount });
})


// Adding products to users cart and updating in Database.
router.post('/user/:productId/add', isLoggedIn, async (req, res) => {
    const productId = req.params.productId;
    const userId = req.user._id;
    let user = await User.findByIdAndUpdate(userId).populate('cart');
    let product = await Product.findByIdAndUpdate(productId);
    user.cart.push(product);
    await user.save();

    res.redirect('/user/cart');
});

// Deleting products from users cart.
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
router.get('/checkout/:id', async (req, res) => {
    const userId = req.user._id;
    let user = await User.findById(userId).populate('cart');


    const lineItems = user.cart.map(item => ({
        price_data: {
            currency: 'INR',
            product_data: {
                name: item.name, // Use the name of the item from your product database
            },
            unit_amount: item.price * 100, // Assuming price is in INR
        },
        quantity: 1, // You can allow users to customize quantity in their cart
    }));

    // Calculate total amount dynamically based on cart items
    const totalAmount = lineItems.reduce((sum, item) => sum + item.price_data.unit_amount * item.quantity, 0);

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:8080/',
        cancel_url: 'http://localhost:4242/cancel',
        shipping_address_collection: {
            allowed_countries: ['IN'], // Add other countries if needed
        },
        payment_intent_data: {
            receipt_email: user.email, // Use the user's email for receipt
            shipping: {
                name: user.name, // Use the user's name for shipping
                address: {
                    // line1: user.address.line,
                    // line2: user.address.line,
                    // city: user.address.city,
                    // state: user.address.state,
                    // postal_code: user.address.postal_code,
                    // country: user.address.country,
                },
            },
        },
    });

    res.redirect(303, session.url);
});

module.exports = router;

const Product = require('./model/Product');
const { productschema, reviewschema } = require('./schema');


const validateproduct = (req, res, next) => {

    let { name, img, price, desc } = req.body;
    const { error } = productschema.validate({ name, img, price, desc })
    if (error) {
        const msg = error.details.map((err) => err.message).join(',')
        return res.render('error', { err: msg })
    }
    next();

}

const validatereview = (req, res, next) => {

    let { rating, comment } = req.body;
    const { error } = reviewschema.validate({ rating, comment })
    if (error) {
        const msg = error.details.map((err) => err.message).join(',');
        return res.render('error', { err: msg });
    }
    next();

}

const isLoggedIn = (req, res, next) => {
    if (req.xhr && !req.isAuthenticated()) {
        return res.status(401).send({ msg: 'You need to login first' });
    }
    // console.log(req.xhr);
    if (!req.isAuthenticated()) {
        req.flash('error', 'You Need to Log In First');
        return res.redirect('/login')
    }
    next();
}

const isSeller = (req, res, next) => {
    let { id } = req.params;
    // console.log(id);
    if (!req.user.role) {
        req.flash('error', 'You do not have permission ');
        return res.redirect('/products')
    } else if (req.user.role !== 'seller') {
        req.flash('error', 'You do not have permission');
        return res.redirect(`/products/${id}`)
    }
    next();
}



const isProductAuthor = async (req, res, next) => {
    let { id } = req.params;
    let product = await Product.findById(id);
    // console.log(product.author, 'author');
    // console.log(req.user, 'user');
    if (!product.author.equals(req.user._id)) {
        req.flash('error', 'You are not authorized to access this product');
        return res.redirect(`/products/${id}`)
    }
    next();
}



module.exports = { validateproduct, validatereview, isLoggedIn, isSeller, isProductAuthor };









const mongoose = require('mongoose');

let quoteScheme = new mongoose.Schema({

    author: {
        type: String,
        required: true,
        trim: true
    },

    text: {
        type: String,
        required: true,
        trim: true
    }

})

const Quote = mongoose.model('Quote', quoteScheme);
module.exports = Quote
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new mongoose.Schema({ 
    email:{
        type:String,
        trim:true,
        required:true
    },

    role:{
        type:String,
        default:'buyer',
    },
    gender:{
        type:String,
        trim:true,
        required:true
    },
    wishlist:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
            }
        ],
    cart:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
            }
        ],

})

userSchema.plugin(passportLocalMongoose); // Always apply on schema change.

let user = mongoose.model('User', userSchema)

module.exports = user;
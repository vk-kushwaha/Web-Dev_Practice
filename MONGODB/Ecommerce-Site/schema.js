const Joi = require('joi');


const productschema = Joi.object({
    name: Joi.string().required().trim(),
    img: Joi.string().trim(),
    price:Joi.number().min(0).required(),
    desc: Joi.string().trim()
})


const reviewschema = Joi.object({
    rating: Joi.string().min(0).max(5),
    comment: Joi.string().trim()
})

module.exports = {productschema , reviewschema}
const {productschema , reviewschema} = require('./schema');

const validateproduct = (req, res ,next)=>{

    let {name , img , price , desc} = req.body;
    const {error} = productschema.validate({name , img , price , desc})
    if(error){
       const msg = error.details.map((err)=>err.message).join(',')
        return res.render('error', {err:msg})
    }
    next();

}

const validatereview = (req, res ,next)=>{

    let {rating , comment} = req.body;
    const {error} = reviewschema.validate({rating , comment})
    if(error){
       const msg = error.details.map((err)=>err.message).join(',')
        return res.render('error', {err:msg})
    }
    next();
    
}


module.exports = {validateproduct , validatereview};










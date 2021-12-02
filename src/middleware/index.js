const { validationResult } = require('express-validator');
const {response} = require('express');

const validateField = (req,res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json(errors);
    }
    next();
}
const existId = (req,res, next) => {
   return (req, res=response)
    next();
}
module.exports ={ validateField }

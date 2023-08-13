const path = require('path');
const express = require('express');

const router = express.Router();

const rootPath = require('../utils/path');

// /admin/add-product => GET
router.get('/add-product',(req,res,next)=>{
    //console.log('in another middleware!');
    res.sendFile(path.join(rootPath,'views','add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;
const path = require('path');
const express = require('express');
const rootPath = require('../utils/path');
const router = express.Router();
router.get('/',(req,res,next)=>{
    console.log('in another middleware!');
    res.sendFile(path.join(rootPath,'views','shop.html'));
});


module.exports = router;
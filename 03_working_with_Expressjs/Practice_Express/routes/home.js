const path = require('path');
const express = require('express');
const rootPath = require('../utils/path');
const router = express.Router();
router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootPath,'views','home.html'));
});


module.exports = router;
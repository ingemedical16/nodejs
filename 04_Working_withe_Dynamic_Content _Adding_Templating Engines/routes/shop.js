const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const admin = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = admin.products;
  console.log(products)
  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  res.render('shop',{products,docTitle:'Shop',path:"/"});
});

module.exports = router;

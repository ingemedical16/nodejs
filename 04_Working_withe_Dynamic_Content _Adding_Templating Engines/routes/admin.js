const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const products = [];
const upload = require('../upload');

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
 // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
 res.render('add-product',{docTitle:'Add Product',path:"/admin/add-product"});
});

// /admin/add-product => POST
router.post('/add-product', upload.single('file'),(req, res, next) => {
 //products.push(req.body);
  res.redirect('/');
});

exports.routes = router;
exports.products = products;

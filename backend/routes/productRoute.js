const express = require('express');
// const { route } = require('express/lib/application');
const { getAllProducts, createProduct, updateProduct, deletProduct, getProductDetails } = require('../controllers/productController');

const router = express.Router();

router.route('/products').get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route('/product/:id').put(updateProduct).delete(deletProduct).get(getProductDetails);


module.exports = router
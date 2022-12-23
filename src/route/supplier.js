const express = require('express');
const router = express.Router();
const controller = require('../controller/supplier');

router.get('/', controller.getAllProduct);
// router.get('/:id', controller.product.detailProduct);
// router.post('/', controller.product.createProduct);
// router.put('/:id', controller.product.updateProduct);
// router.delete('/:id', controller.product.deleteProduct);

module.exports = router;

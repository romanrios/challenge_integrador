const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController.js');

router.get('/', shopController.getShop);
router.get('/find', shopController.getShopFind); // agregado
router.get('/filter-category/:id', shopController.getShopFilterCategory); // agregado
router.get('/filter-licence/:id', shopController.getShopFilterLicence); // agregado
router.get('/item/:id', shopController.getItem);
router.post('/item/:id/add', shopController.addItemToCart);
router.get('/cart/', shopController.getCart);
router.delete('/cart/:id', shopController.deleteCart); // agregado
router.post('/cart/', shopController.postCart);

module.exports = router;
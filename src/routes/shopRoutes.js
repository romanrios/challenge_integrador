const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController.js');

router.get('/', shopController.getShop);
router.get('/filter-category/:id', shopController.getShopFilterCategory);
router.get('/filter-licence/:id', shopController.getShopFilterLicence);
router.get('/item/:id', shopController.getItem);
router.post('/item/:id/add', shopController.addItem);
router.get('/cart/', shopController.getCart);
router.post('/cart/', shopController.postCart);

module.exports = router;
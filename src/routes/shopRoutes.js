const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController.js');


router.get('/', shopController.getShop);
router.get('/item/:id', shopController.getItem);
router.post('/item/:id/add', shopController.addItem);
router.get('/cart/', shopController.getCart);
router.post('/cart/', shopController.postCart);

// Para testing. Consultamos todos los items en la BBDD
// router.get('/items', shopController.getItems); 

module.exports = router;
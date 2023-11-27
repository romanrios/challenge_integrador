const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');

router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/register', authController.getRegister);
router.post('/register', authController.postRegister);
router.get('/logout', authController.getLogout);

module.exports = router;

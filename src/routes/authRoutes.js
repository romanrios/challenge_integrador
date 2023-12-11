const express = require('express');
const authController = require('../controllers/authController.js');
const { validateInput } = require('../middlewares/validator');
const { body } = require('express-validator');

const router = express.Router();

const loginValidation = [
    body('email')
        .isEmail()
        .withMessage('Por favor ingrese un correo válido. '),
    body('password')
        // .isLength({ min: 6 })
        // .isAlphanumeric()        
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)
        .withMessage('La contraseña debe contener letras y números y al menos 6 caracteres. ')
];

router.get('/login', authController.getLogin);
router.post('/login', loginValidation, validateInput, authController.postLogin);
router.get('/register', authController.getRegister);
router.post('/register', authController.postRegister);
router.get('/logout', authController.getLogout);

module.exports = router;

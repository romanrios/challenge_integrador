const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController.js');
const uploadFiles = require('../middlewares/uploadFiles.js');

const { isLogged } = require('../middlewares/auth.js')

router.use(isLogged);

router.get('/', adminController.getAdmin);
router.get('/create', adminController.getCreate);
router.post('/create', uploadFiles.array('images', 2), adminController.postCreate);
router.get('/edit/:id', adminController.getEdit);
router.post('/edit/:id', adminController.postEdit);
router.delete('/delete/:id', adminController.delete);

module.exports = router;
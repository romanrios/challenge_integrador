const multer = require('multer');
const path = require('path');

// Lógica para guardar imágenes en el server

const storage = multer.diskStorage({
    destination: (req, file, callback) => callback(null, path.resolve(__dirname, '../../public/img')),
    filename: (req, file, callback) => callback(null, `${Date.now()}`)
});

const uploadFile = multer({ storage });

// uploadFile.array('fieldname', max)   .single('fieldname') 

module.exports = uploadFile;
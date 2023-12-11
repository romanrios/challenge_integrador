const { validationResult } = require('express-validator');

module.exports = {

    validateInput: (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // Almacena los errores en el objeto req
            req.session.validationErrors = errors.array();
        }
        next();
    },

} 
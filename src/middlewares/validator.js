const { validationResult } = require('express-validator');

const validateInput = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {

        // si hay errores en el input los muestra en pantalla
        // res.status(400).send({ errors: errors.array() });

        // Almacena los errores en el objeto req
        req.session.validationErrors = errors.array();
    }

    next();
};

module.exports = validateInput;
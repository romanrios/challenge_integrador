// El error 401 indica que la solicitud no está autorizada, y se necesita autenticación para acceder al recurso solicitado.

const isLogged = (req, res, next) => {
    if (req.session.isLogged) {
        return next();
    }
    res.status(401).redirect('/auth/login');
}

module.exports = {
    isLogged
}
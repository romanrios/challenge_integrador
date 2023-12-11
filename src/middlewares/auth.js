
module.exports = {

    isLogged: (req, res, next) => {
        if (req.session.isLogged) {
            return next();
        }
        res.status(401).redirect('/auth/login');
        // 401: Solicitud no autorizada, se necesita autenticación para acceder al recurso.
    },

}
require('dotenv').config();
const session = require('express-session');

module.exports = {

    initSession: () => {
        return session({
            secret: process.env.SESSION_NAME || 'default_session_secret',

            // la sesión solo se guardará si hay cambios
            resave: false,
            saveUninitialized: false,

            // Usamos el MemoryStore por defecto de express-session
            rolling: true,

            cookie: {
                maxAge: 5 * 60 * 1000, // 5 minutos en milisegundos
            },
        });
    },

};
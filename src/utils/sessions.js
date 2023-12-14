require('dotenv').config();
const session = require('express-session');
const { conn } = require('../config/conn')
const MySQLStore = require('express-mysql-session')(session);

// Declaramos nuestra BBDD como store
const sessionStore = new MySQLStore({     
    // expiration: 5 * 60 * 1000, // Duración de la sesión en milisegundos 
 }, conn);

module.exports = {

    initSession: () => {
        return session({
            secret: process.env.SESSION_NAME,

            // la sesión solo se guardará si hay cambios
            resave: false,
            saveUninitialized: false,    

            // usamos como store la BBDD
            store: sessionStore,

            // Para reiniciar el tiempo de expiración en cada solicitud
            rolling: true, 
            
            cookie: {
                maxAge: 5 * 60 * 1000, // 5 minutos en milisegundos
            },
        })
    },
    
}
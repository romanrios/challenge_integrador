require('dotenv').config();
const session = require('express-session');
const { conn } = require('../config/conn')
const MySQLStore = require('express-mysql-session')(session);

// Declaramos nuestra BBDD como store
const sessionStore = new MySQLStore({     
    // expiration: 300000, // Duración de la sesión en milisegundos 
    // createDatabaseTable: true, // Crea automáticamente la tabla de sesiones si no existe
 }, conn);

module.exports = {

    initSession: () => {
        return session({
            secret: process.env.SESSION_NAME,

            // la sesión solo se guardará si hay cambios
            resave: false,
            saveUninitialized: false,    

            store: sessionStore,
        })
    },
    
}
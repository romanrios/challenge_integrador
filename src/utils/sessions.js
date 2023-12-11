require('dotenv').config();
const session = require('express-session');
const { conn } = require('../config/conn')
const MySQLStore = require('express-mysql-session')(session);

// Declaramos nuestra BBDD como store
const sessionStore = new MySQLStore({ /* options? */ }, conn);

module.exports = {

    initSession: () => {
        return session({
            secret: process.env.SESSION_NAME,
            resave: false,
            saveUninitialized: false,
            store: sessionStore,
        })
    },
    
}
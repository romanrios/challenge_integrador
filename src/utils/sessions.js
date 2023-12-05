require('dotenv').config();

const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const { conn } = require('../config/conn')

const sessionStore = new MySQLStore({
    endConnectionOnClose: true,
    clearExpired: true,
    expiration: 5 * 60 * 1000, // conexión de la sesión expira en 5 minutos
    checkExpirationInterval: 1 * 60 * 1000
}, conn);

function initSession() {
    return session({
        secret: process.env.SESSION_NAME,
        resave: false,
        saveUninitialized: false,
        store: sessionStore,
        cookie: { maxAge: 5 * 60 * 1000 } // cookie expira en 5 minutos
    });
};

module.exports = {
    initSession
};
require('dotenv').config();
const session = require('express-session');
const { conn } = require('../config/conn')
const MySQLStore = require('express-mysql-session')(session);

// declaramos store en la base de datos
const sessionStore = new MySQLStore({ /* options */ }, conn);

// función para iniciar express session
function initSession() {
    return session({
        secret: process.env.SESSION_NAME,
        resave: false,
        saveUninitialized: false,
        store: sessionStore,
    });
};

module.exports = {
    initSession
};
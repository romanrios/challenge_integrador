require('dotenv').config();

const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const { conn } = require('../config/conn')
const sessionStore = new MySQLStore({}, conn);

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
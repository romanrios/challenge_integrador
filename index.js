require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const PORT = process.env.PORT;
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
const { initSession } = require('./src/utils/sessions');

// Template Engines
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './src/views'));

// Middlewares de configuración
app.use(express.static(path.resolve(__dirname, 'public'))); // define carpeta de archivos estáticos
app.use(express.json()); // Para POST. Parsea datos, los convierte a un formato que entienda el servidor
app.use(express.urlencoded()); // Idem anterior.    (deprecated?)
app.use(methodOverride('_method')); // para PUT y DELETE

// User Session
app.use(initSession());
app.use((req, res, next) => {
    res.locals.isLogged = req.session.isLogged;
    next();
});

// Rutas
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

app.use((req, res) => { res.status(404).send('La página que buscas no existe. Error 404.') })

// Método para correr el server
app.listen(PORT, () => { console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`) });
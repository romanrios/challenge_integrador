require('dotenv').config();
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
const { initSession } = require('./src/utils/sessions');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

// Template Engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './src/views')); // agregamos path para Vercel

// Middlewares de configuración
app.use(express.json()); // Nos ahorra usar JSON.parse() al recibir datos y JSON.stringify() para enviarlos. Permite capturar json en req.body.
app.use(express.urlencoded()); // Permite capturar datos de formulario (application/x-www-form-urlencoded) con req.body    (deprecated?)
app.use(methodOverride('_method')); // para PUT y DELETE
app.use(express.static(path.resolve(__dirname, 'public'))); // define carpeta de archivos estáticos
app.use(cors()); // Necesario para el intercambio de datos entre distintos servidores

// User Session
app.use(initSession());
// variables que estarán disponibles en todas las views
app.use((req, res, next) => {
    res.locals.isLogged = req.session.isLogged;
    res.locals.shopCart = req.session.shopCart;
    next();
});

// Rutas
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

// Error 404
app.use((req, res) => { res.status(404).render('./error', {view:{title:"Oops! | Funkoshop"}}) });

// Método para correr el server
app.listen(PORT, () => { console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`) });
require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    // datos de cuenta de alwaysdata
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,

    // Indica que el pool debe esperar si todas las conexiones están ocupadas y ha
    // alcanzado el límite de conexiones (connectionLimit) antes de arrojar un error.
    waitForConnections: true,

    // Establece el límite máximo de conexiones que el pool puede manejar simultáneamente.
    connectionLimit: 10,

    // Establece el límite de la cola para conexiones pendientes.
    // Un valor de 0 significa que no hay límite.
    queueLimit: 0
});


// Testing ( node ./src/config/conn.js )
// pool.getConnection((error, connection) => {
//     if (error) {
//         console.error('Hubo un error de conexión a la base de datos: ', error);
//     } else {
//         console.log('Conexión a la base de datos fue exitosa.');
//         connection.release();
//     }
// });

// Export
module.exports = {
    conn: pool.promise()
};
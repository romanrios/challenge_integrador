require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 2,
    queueLimit: 0
});

// Testing ( node ./src/config/conn.js )
pool.getConnection((error, connection) => {
    if (error) {
        console.error('Hubo un error de conexión a la base de datos: ', error);
    } else {
        console.log('Conexión a la base de datos fue exitosa.');
        connection.release();
    }
});

// Export
module.exports = {
    conn: pool.promise()
};
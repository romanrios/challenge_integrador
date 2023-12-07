const { conn } = require('../config/conn');

module.exports = {

    getAll: async () => {
        try {
            const connection = await conn.getConnection();
            try {
                const [rows] = await connection.query('SELECT * FROM licences;');
                return rows;
            } catch (error) {
                const e = {
                    isError: true,
                    message: `Error al consultar los datos: ${error}`
                }
                return e;
            }
            finally {
                await connection.release();
            }
        } catch (error) {
            console.error('Error al obtener la conexión del pool:', error);
        }

    }
};
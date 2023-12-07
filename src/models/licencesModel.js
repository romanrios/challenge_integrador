const { conn } = require('../config/conn');

module.exports = {

    getAll: async () => {
        const connection = await conn.getConnection()
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
            await conn.releaseConnection();
        }
    },

};
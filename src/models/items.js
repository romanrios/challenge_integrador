const { conn } = require('../config/conn');

module.exports = {
    getAll: async () => {
        try {
            const [rows] = await conn.query('SELECT * FROM products ORDER BY product_id DESC;');
            return rows;
        } catch (error) {

            const e = {
                isError: true,
                message: `Error al consultar los datos: ${error}`
            }
            return e;
        } finally {
            await conn.releaseConnection();
        }
    },

    getOne: async (params) => {

        try {
            const [rows] = await conn.query('SELECT * FROM products WHERE ?;', params);
            return rows;
        } catch (error) {
            const e = {
                isError: true,
                message: `Error al consultar los datos: ${error}`
            }
            return e;
        } finally {
            await conn.releaseConnection();
        }
    }
}


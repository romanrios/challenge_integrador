const { conn } = require('../config/conn');

module.exports = {
    getAll: async () => {
        try {
            const [rows] = await conn.query('SELECT products.*, licences.licence_name FROM products LEFT JOIN licences ON products.licence_id = licences.licence_id ORDER BY product_id DESC;');
            return rows;
        } catch (error) {

            const e = {
                isError: true,
                message: `Error al consultar los datos: ${error}`
            }
            return e;
        }
        // finally {
        // await conn.releaseConnection();
        // }
    },

    getOne: async (params) => {

        try {
            const [rows] = await conn.query('SELECT products.*, licences.licence_name FROM products LEFT JOIN licences ON products.licence_id = licences.licence_id WHERE ?;', params);
            return rows;
        } catch (error) {
            const e = {
                isError: true,
                message: `Error al consultar los datos: ${error}`
            }
            return e;
        }
        // finally {
        //     await conn.releaseConnection();
        // }
    }
}


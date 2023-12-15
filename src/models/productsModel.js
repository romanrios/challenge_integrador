const { conn } = require('../config/conn');

module.exports = {
    getAll: async () => {
        try {

            // 'SELECT
            //   products.*,
            //   licences.licence_name,
            //   categories.category_name
            // FROM
            //   products
            // LEFT JOIN
            //   licences ON products.licence_id = licences.licence_id
            // LEFT JOIN
            //   categories ON products.category_id = categories.category_id
            // ORDER BY
            //   product_id DESC;'


            const [rows] = await conn.query('SELECT products.*, licences.licence_name, categories.category_name FROM products LEFT JOIN licences ON products.licence_id = licences.licence_id LEFT JOIN categories ON products.category_id = categories.category_id ORDER BY product_id DESC;');
            return rows;
        } catch (error) {
            const e = {
                isError: true,
                message: `Error al consultar los datos: ${error}`
            }
            return e;
        } finally {
            conn.releaseConnection();
        }
    },

    getOne: async (params) => {

        try {

            // 'SELECT
            //   products.*,
            //   licences.licence_name,
            //   categories.category_name AS category_name
            // FROM
            //   products
            // LEFT JOIN
            //   licences ON products.licence_id = licences.licence_id
            // LEFT JOIN
            //   categories ON products.category_id = categories.category_id
            // WHERE
            //   ?;', params

            const [rows] = await conn.query('SELECT products.*, licences.licence_name, categories.category_name FROM products LEFT JOIN licences ON products.licence_id = licences.licence_id LEFT JOIN categories ON products.category_id = categories.category_id WHERE ?;', params);
            return rows;
        } catch (error) {
            const e = {
                isError: true,
                message: `Error al consultar los datos: ${error}`
            }
            return e;
        } finally {
            conn.releaseConnection();
        }
    }
}


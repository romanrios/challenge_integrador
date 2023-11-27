const { conn } = require('../config/conn');

module.exports = {
    getAll: async () => {
        const [rows] = await conn.query('SELECT * FROM products ORDER BY product_id DESC;');
        return rows;
    },

    getOne: async (params) => {
        const [rows] = await conn.query('SELECT * FROM products WHERE ?;', params);
        return rows;
    }

}
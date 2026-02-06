const fs = require('fs');
const path = require('path');

const dataPath = path.resolve(__dirname, '../data/funko.json');

const loadProducts = () => {
    const rawData = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(rawData);
};

module.exports = {
    // Devuelve todos los productos desde el JSON local
    getAll: async () => {
        try {
            const products = loadProducts();
            return products;
        } catch (error) {
            const e = {
                isError: true,
                message: `Error al consultar los datos: ${error}`
            };
            return e;
        }
    },

    // Emula el WHERE ? de MySQL usando un objeto params con una sola key
    getOne: async (params) => {
        try {
            const products = loadProducts();

            if (!params || typeof params !== 'object') {
                return [];
            }

            const entries = Object.entries(params);
            if (entries.length === 0) {
                return [];
            }

            const [key, value] = entries[0];

            const filtered = products.filter((item) => {
                // Usamos == para permitir comparar "1" con 1
                return item[key] == value;
            });

            return filtered;
        } catch (error) {
            const e = {
                isError: true,
                message: `Error al consultar los datos: ${error}`
            };
            return e;
        }
    }
};


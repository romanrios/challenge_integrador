const fs = require('fs');
const path = require('path');

const dataPath = path.resolve(__dirname, '../data/funko.json');

const loadProducts = () => {
    const rawData = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(rawData);
};

module.exports = {

    // Construye las licencias a partir de los productos del JSON local
    getAll: async () => {
        try {
            const products = loadProducts();

            const licencesMap = new Map();

            products.forEach((product) => {
                if (!product.licence_name) return;
                if (!licencesMap.has(product.licence_name)) {
                    licencesMap.set(product.licence_name, product);
                }
            });

            let idCounter = 1;
            const licences = Array.from(licencesMap.values()).map((product) => ({
                licence_id: idCounter++,
                licence_name: product.licence_name,
                // Descripción básica para mantener la interfaz esperada en las vistas
                licence_description: `Colección de ${product.licence_name}`
            }));

            return licences;
        } catch (error) {
            const e = {
                isError: true,
                message: `Error al consultar los datos: ${error}`
            };
            return e;
        }
    },

};
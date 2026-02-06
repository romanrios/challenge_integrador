const fs = require('fs');
const path = require('path');

const dataPath = path.resolve(__dirname, '../data/licences.json');

const loadLicences = () => {
    const rawData = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(rawData);
};

module.exports = {

    // Devuelve las licencias definidas en el JSON local
    getAll: async () => {
        try {
            const licences = loadLicences();
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
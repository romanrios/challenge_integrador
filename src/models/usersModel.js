const fs = require('fs');
const path = require('path');

const dataPath = path.resolve(__dirname, '../data/users.json');

const loadUsers = () => {
    if (!fs.existsSync(dataPath)) {
        return [];
    }
    const rawData = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(rawData);
};

module.exports = {
    getAll: async () => {
        try {
            const users = loadUsers();
            return users;
        } catch (error) {
            const e = {
                isError: true,
                message: `Error al consultar los datos: ${error}`
            };
            return e;
        }
    },

};
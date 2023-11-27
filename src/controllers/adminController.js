const { getAllItems } = require('../services/itemsServices')

module.exports = {

    getAdmin: async (req, res) => {
        const items = await getAllItems();
        res.render('./admin/admin',
            {
                view: { title: "Admin | Funkoshop" },
                items: items
            }
        );
    },

    getCreate: (req, res) => res.send('Página de admin:getCreate'),
    postCreate: (req, res) => res.send('Página de admin:postCreate'),
    getEdit: (req, res) => res.send('Página de admin:getEdit'),
    postEdit: (req, res) => res.send('Página de admin:postEdit'),
    delete: (req, res) => res.send('Página de admin:delete'),

};

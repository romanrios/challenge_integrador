const { getAllItems } = require('../services/itemsServices')

module.exports = {

    getAdmin: async (req, res) => {
        const items = await getAllItems();
        if (req.session.isLogged) {
            return res.render('./admin/admin',
                {
                    view: { title: "Admin | Funkoshop" },
                    items: items
                }
            );
        } else {
            // si no está logueado}
            return res.redirect('../auth/login')
        }
    },

    getCreate: async (req, res) => {
        res.render('./admin/create',
            {
                view: { title: "Admin | Funkoshop" },
            }
        );
    },

    postCreate: (req, res) => res.send('Página de admin:postCreate'),

    getEdit: async (req, res) => {
        res.render('./admin/edit',
            {
                view: { title: "Edit | Funkoshop" },
            }
        );
    },

    postEdit: (req, res) => res.send('Página de admin:postEdit'),

    delete: (req, res) => res.send('Página de admin:delete'),

};

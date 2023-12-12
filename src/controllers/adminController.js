const { getAllItems, getOne } = require('../services/productsServices')
const { getAllLicences } = require('../services/licencesServices')

module.exports = {

    getAdmin: async (req, res) => {
        const items = await getAllItems();
        return res.render('./admin/admin',
            {
                view: { title: "Admin | Funkoshop" },
                items
            });
    },

    getCreate: async (req, res) => {
        const licences = await getAllLicences();
        res.render('./admin/create',
            {
                view: { title: "Admin | Funkoshop" },
                licences
            }
        );
    },

    postCreate: (req, res) => res.send('Página de admin:postCreate'),

    getEdit: async (req, res) => {
        const id = req.params.id;
        const item = await getOne({ product_id: id });
        const licences = await getAllLicences();
        res.render('./admin/edit',
            {
                view: { title: "Admin | Funkoshop" },
                item: item[0],
                licences
            }
        );
    },

    postEdit: (req, res) => res.send('Página de admin:postEdit'),

    delete: async (req, res) => {
        const productId = req.params.id;
        res.send('Esta es la Ruta DELETE para el product_id: ' + productId)
    },
};




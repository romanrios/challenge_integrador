const { getAllItems, getOne } = require('../services/itemsServices')

module.exports = {

    getShop: async (req, res) => {
        const items = await getAllItems();
        res.render('./shop/shop',
            {
                view:
                {
                    title: "Shop | Funkoshop"
                },
                items: items,
                showFirst: "Funkos",
                sortBy: 'category_name'
            }
        );
    },

    getShopFilterCategory: async (req, res) => {
        const showFirst = req.params.id;
        const items = await getAllItems();
        const sortBy = 'category_name';
        res.render('./shop/shop',
            {
                view:
                {
                    title: "Shop | Funkoshop"
                },
                items,
                showFirst: showFirst,
                sortBy
            }
        );
    },

    getShopFilterLicence: async (req, res) => {
        const showFirst = req.params.id;
        const items = await getAllItems();
        const sortBy = 'licence_name';
        res.render('./shop/shop',
            {
                view:
                {
                    title: "Shop | Funkoshop"
                },
                items,
                showFirst: showFirst,
                sortBy
            }
        );
    },

    

    getItem: async (req, res) => {
        const id = req.params.id;
        const item = await getOne({ product_id: id });
        const licence = item[0].licence_name;
        const related = await getOne({ licence_name: licence });
        res.render('./shop/item',
            {
                view:
                {
                    title: "Shop | Funkoshop"
                },
                item: item[0],
                related,
            }
        );
    },



    addItem: async (req, res) => {

        const { quantity } = req.body;
        const itemId = req.params.id;

        if (!req.session.shopCart) {
            req.session.shopCart = [];
        } req.session.shopCart.push({ id: itemId, quantity: quantity });

        res.redirect('/shop');

    },


    getCart: async (req, res) => {
        const items = await getAllItems();
        const myCart = res.locals.shopCart;

        res.render('./shop/cart',
            {
                view:
                {
                    title: "Shop | Funkoshop"
                },
                items: items,
                myCart: myCart
            }
        );
    },

    postCart: (req, res) => res.send('Página de Shop:postCart')

};
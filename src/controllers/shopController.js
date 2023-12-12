const { getAllItems, getOne } = require('../services/productsServices')

module.exports = {

    getShop: async (req, res) => {
        const items = await getAllItems();
        res.render('./shop/shop',
            {
                view:
                {
                    title: "Shop | Funkoshop"
                },
                items,
                showFirst: "Funkos",
                sortBy: 'category_name'
            }
        );
    },

    getShopFind: async (req, res) => {
        itemIdToFind = req.query.id;
        const items = await getAllItems();

        // Realizamos la búsqueda en el array items con el método .includes
        const matchingItems = items.filter(item =>
            item.product_name.toLowerCase().includes(itemIdToFind.toLowerCase()) || item.licence_name.toLowerCase().includes(itemIdToFind.toLowerCase())
        );

        res.render('./shop/shop',
            {
                view:
                {
                    title: "Shop | Funkoshop"
                },
                items: matchingItems,
                showFirst: "Funkos",
                sortBy: 'category_name'
            }
        );
    },

    getShopFilterCategory: async (req, res) => {
        const showFirst = req.params.id;
        const items = await getAllItems();
        // Ordenamos por categoría (Funkos, Remeras, Llaveros)
        const sortBy = 'category_name';
        res.render('./shop/shop',
            {
                view:
                {
                    title: "Shop | Funkoshop"
                },
                items,
                showFirst,
                sortBy
            }
        );
    },

    getShopFilterLicence: async (req, res) => {
        const showFirst = req.params.id;
        const items = await getAllItems();
        // Ordenamos por licencia (Star wars, Pokemon, Harry potter)
        const sortBy = 'licence_name';
        res.render('./shop/shop',
            {
                view:
                {
                    title: "Shop | Funkoshop"
                },
                items,
                showFirst,
                sortBy
            }
        );
    },



    getItem: async (req, res) => {
        const id = req.params.id;
        // Pasamos un parámetro para el WHERE de la consulta a la BBDD
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



    addItemToCart: async (req, res) => {

        const { quantity } = req.body;
        const itemId = req.params.id;

        // almacenamos id y cantidad de session BBDD
        if (!req.session.shopCart) {
            req.session.shopCart = [];
        }
        // Buscar si ya existe un elemento con el mismo id
        const existingItem = req.session.shopCart.find(item => item.id === itemId);

        if (existingItem) {
            // Si el elemento ya existe, actualiza la cantidad
            existingItem.quantity = Number(existingItem.quantity) + Number(quantity);
        } else {
            // Si el elemento no existe, lo agrega al array
            req.session.shopCart.push({ id: itemId, quantity: quantity });
        }

        res.redirect('/shop');

    },


    getCart: async (req, res) => {
        const items = await getAllItems();
        // const myCart = res.locals.shopCart;
        // también podríamos pedir directamente req.session.shopCart

        res.render('./shop/cart',
            {
                view:
                {
                    title: "Shop | Funkoshop"
                },
                items,
                // myCart
            }
        );
    },

    deleteCart: async (req, res) => {
        itemIdToDelete = req.params.id;

        // Buscar el índice del elemento con el id especificado
        const indexToDelete = req.session.shopCart.findIndex(item => item.id == itemIdToDelete);

        if (indexToDelete !== -1) {
            // Si se encontró el elemento, eliminarlo del array
            req.session.shopCart.splice(indexToDelete, 1);
        }

        res.redirect('/shop/cart');
    },

    postCart: (req, res) => res.send('Página de Shop:postCart')

};
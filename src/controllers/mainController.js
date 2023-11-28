const { getAllItems } = require('../services/itemsServices')

module.exports = {

    home: async (req, res) => {

        req.session.count = req.session.count ? ++req.session.count : 1;
        console.log(req.session.count);

        const items = await getAllItems();

        if (items.isError) {
            return res.status(500).send('Hemos tenido un error al consultar los datos')
        }

        const starwarsItems = items.filter(item => item.licence_name === 'Star Wars');
        const starwarsItem = starwarsItems[Math.floor(Math.random() * starwarsItems.length)];

        const pokemonItems = items.filter(item => item.licence_name === 'Pokemon');
        const pokemonItem = pokemonItems[Math.floor(Math.random() * pokemonItems.length)];

        const harrypotterItems = items.filter(item => item.licence_name === 'Harry Potter');
        const harrypotterItem = harrypotterItems[Math.floor(Math.random() * harrypotterItems.length)];


        return res.render('./home',
            {
                view:
                {
                    title: "Home | Funkoshop"
                },
                items: items,
                starwarsItem: starwarsItem,
                pokemonItem: pokemonItem,
                harrypotterItem: harrypotterItem
            }
        );
    },

    contact: (req, res) => res.render('./contact', {
        view: {
            title: "Contacto | Funkoshop"
        }
    }),


    about: (req, res) => res.send('Página de Sobre Nosotros'),
    faqs: (req, res) => res.send('Página de Preguntas Frecuentes'),

};





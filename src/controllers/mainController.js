const { getAllItems } = require('../services/itemsServices')

module.exports = {

    home: async (req, res) => {
        const items = await getAllItems();

        const starwarsItems = items.filter(item => item.licence_name === 'Star Wars');
        const starwarsItem = starwarsItems[Math.floor(Math.random() * starwarsItems.length)];

        const pokemonItems = items.filter(item => item.licence_name === 'Pokemon');
        const pokemonItem = pokemonItems[Math.floor(Math.random() * pokemonItems.length)];

        const harrypotterItems = items.filter(item => item.licence_name === 'Harry Potter');
        const harrypotterItem = harrypotterItems[Math.floor(Math.random() * harrypotterItems.length)];


        res.render('./home',
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





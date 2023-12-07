const { getAllItems } = require('../services/itemsServices');
const { getAllLicences } = require('../services/licencesServices');

module.exports = {

    home: async (req, res) => {

        // req.session.count = req.session.count ? ++req.session.count : 1;
        // console.log(req.session.count);

        const items = await getAllItems();
        const licences = await getAllLicences();

        if (items.isError || licences.isError) {
            return res.status(500).send('Hemos tenido un error al consultar los datos')
        }

        // const starwarsItems = items.filter(item => item.licence_name === 'Star Wars');
        // const starwarsItem = starwarsItems[Math.floor(Math.random() * starwarsItems.length)];


        return res.render('./home',
            {
                view:
                {
                    title: "Home | Funkoshop"
                },
                items: items,
                licences: licences
                // starwarsItem: starwarsItem,

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





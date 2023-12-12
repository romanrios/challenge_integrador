const { getAllItems } = require('../services/productsServices');
const { getAllLicences } = require('../services/licencesServices');

module.exports = {

    home: async (req, res) => {

        // req.session.count = req.session.count ? ++req.session.count : 1;
        // console.log(req.session.count);
        
        const items = await getAllItems();
        const licences = await getAllLicences();

        // Ejemplo de manejo de error al consultar la BBDD
        if (items.isError || licences.isError) {
            return res.status(500).send('Hemos tenido un error al consultar los datos')
        }

        return res.render('./home',
            {
                view:
                {
                    title: "Home | Funkoshop"
                },
                items,
                licences
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





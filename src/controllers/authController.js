// router.post('/login', (req, res) => {
//     const { user, password } = req.body;
//     res.send('Solicitud de login. User: ' + user + ', Password: ' + password);
// });

module.exports = {

    getLogin: async (req, res) => {
        res.render('./admin/login',
            {
                view: { title: "Login | Funkoshop" },
            }
        );
    },

    postLogin: (req, res) => res.send('Página de admin:postLogin'),
    getRegister: (req, res) => res.send('Página de admin:getRegister'),
    postRegister: (req, res) => res.send('Página de admin:postRegister'),
    getLogout: (req, res) => res.send('Página de admin:getLogout'),

};

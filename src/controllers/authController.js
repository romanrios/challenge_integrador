const userCredentials = {
    email: 'roman@gmail.com',
    password: 'roman123'
}


module.exports = {

    getLogin: async (req, res) => {
        res.render('./admin/login',
            {
                view: { title: "Login | Funkoshop" },
            }
        );
    },

    postLogin: (req, res) => {
        const { email, password } = req.body;
        const emailValidation = userCredentials.email == email;
        const passwordValidation = userCredentials.password == password;
        req.session.isLogged = emailValidation && passwordValidation;
        if(req.session.isLogged){
            return res.redirect('/admin');
        }
        return res.status(401).send('Credenciales inválidas')

        // res.send('Solicitud de login. User: ' + email + ', Password: ' + password + ` Las credenciales coinciden: ${isLogged}`);
    },

    getRegister: (req, res) => res.send('Página de admin:getRegister'),

    postRegister: (req, res) => res.send('Página de admin:postRegister'),

    getLogout: (req, res) => {
        req.session.isLogged = false;
        res.redirect('../home');
    },

};

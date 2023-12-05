const userCredentials = {
    email: 'roman@gmail.com',
    password: 'roman123'
}

module.exports = {

    getLogin: async (req, res) => {
        res.render('./admin/login',
            {
                view: { title: "Login | Funkoshop" },
                emailMessage: "",
                passwordMessage: ""
            }
        );
    },

    postLogin: async (req, res) => {

        // gestión de errores en email y password
        const errors = req.session.validationErrors;
        if (errors) {

            const emailErrors = errors.filter(error => error.path === 'email').map(error => error.msg);
            const passwordErrors = errors.filter(error => error.path === 'password').map(error => error.msg);

            req.session.validationErrors = null;
            return res.render('./admin/login',
                {
                    view: { title: "Login | Funkoshop" },
                    emailMessage: emailErrors,
                    passwordMessage: passwordErrors
                }
            );
        }

        // validación de email y password
        const { email, password } = req.body;
        const emailValidation = userCredentials.email == email;
        const passwordValidation = userCredentials.password == password;
        req.session.isLogged = emailValidation && passwordValidation;
        if (req.session.isLogged) {
            return res.redirect('/admin');
        }

        return res.render('./admin/login',
            {
                view: { title: "Login | Funkoshop" },
                emailMessage: "Credenciales inválidas",
                passwordMessage: "Credenciales inválidas"
            }
        );


    },

    getRegister: async (req, res) => {
        res.render('./admin/register',
            {
                view: { title: "Register | Funkoshop" },
            }
        );
    },
    postRegister: (req, res) => res.send('Página de admin:postRegister'),

    getLogout: (req, res) => {
        req.session.isLogged = false;
        res.redirect('../home');
    },

};

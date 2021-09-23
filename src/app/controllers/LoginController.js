const users = require('../models/users')

class LoginController {
    index(req, res) {
        res.render('login', { css: 'login.css' });
    }

    postLogin(req, res, next) {
        const email = res.body.email;
        const pass = res.body.password;

        // users.find({}, function(req, res) => {

        // })
    }
}

module.exports = new LoginController
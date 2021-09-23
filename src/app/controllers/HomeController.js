class SignupController {

    //(GET) landing
    index(req, res) {
        res.render('home', { css: 'home.css' });
    }
}

module.exports = new SignupController
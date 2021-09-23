class SignupController {

    //(GET) landing
    index(req, res) {
        res.render('signup', { css: 'signup.css' });
    }
}

module.exports = new SignupController
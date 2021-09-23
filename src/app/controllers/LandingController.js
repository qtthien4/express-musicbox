class LandingController {

    //(GET) landing
    index(req, res) {
        res.render('landing', { css: 'landing.css' });
    }
}

module.exports = new LandingController
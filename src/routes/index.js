// const { Router } = require("express");
const landingRouter = require('./landing');
const loginRouter = require('./login');
const signupRouter = require('./signup');
const homepRouter = require('./home');
const testRouter = require("./test");

function route(app) {
    //app.use('/', landingRouter)

    app.get('/', (req, res) => {
        res.render('landing', { css: 'landing.css' });
    })

    app.use('/login', loginRouter)
    app.use('/test', testRouter)

    // app.get('/login', (req, res) => {
    //     res.render('login', { css: 'login.css' });
    // })

    app.use('/signup', signupRouter)

    app.use('/home', homepRouter)
}
module.exports = route;
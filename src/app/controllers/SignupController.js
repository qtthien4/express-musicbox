const users = require('../models/users');

class SignupController {

    //(GET) 
    index(req, res) {
        res.render('signup', { css: 'signup.css' });
    }

    //POST create
    postSignUp(req, res, next) {
        // res.json(req.body);
        const signUp = new users(req.body);
        const email = signUp.email;
        const user = signUp.user;

        // var test1 = "qtthien4@gmail.com";
        // var user = "qtthien";

        users.find({ email: email }, (err, asd) => {
            if (asd.length != 0) {
                res.render('signup', {
                    err: ['co mail r má'],
                    css: 'signup.css'
                });
            }
        })
        users.find({ user: user }, (err, asd) => {
            if (asd.length != 0) {
                res.render('signup', {
                    err: ['co user r má'],
                    css: 'signup.css'
                });
            } else {
                signUp.save();
                res.redirect('login');
            }
        })

    }
}

module.exports = new SignupController
const users = require('../models/users')

class LoginController {
    index(req, res) {
        res.render('login', { css: 'login.css' });
    }

    postLogin(req, res, next) {
        let emails = req.body.email;
        let password = req.body.password;

        var user = users.find({
                user: emails,
                pass: password
            }, (err, a) => {
                if (a.length == 0) {
                    res.render('login', {
                        err: ['sai r thang ga'],
                        css: 'login.css'
                    });
                } else if (a.length != 0) {
                    res.redirect('/home');
                    console.log('m khong ngu');
                }
            })
            // users.find({}, function(err, users) {
            //     if(!err)
            //     {
            //         res.json(users)
            //     }
            //     else{
            //         res.status(400).json(  {error : 'err'});
            //     }
            // })
    }
}

module.exports = new LoginController
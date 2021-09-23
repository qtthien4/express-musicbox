const Albums = require('../models/Album')
    // const { mutipleMongooseToObject } = require('../../util')

class TestController {
    index(req, res, next) {
        //res.render('login', { css: 'login.css' });

        Albums.find({})
            .then(albums => {
                albums = albums.map(albums => albums.toObject())
                res.render('home copy', {
                    albums: albums,
                    css: 'home.css'
                })
            })
            .catch(next)


        // res.json({
        //     name: 'test',
        // })
    }
}

module.exports = new TestController
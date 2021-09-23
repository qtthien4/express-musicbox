const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Albums = new Schema({
    name: { type: String, },
    Released: {
        type: String,
    },
    picture: {
        type: String,
    }
});

module.exports = mongoose.model('Albums', Albums, 'Albums');
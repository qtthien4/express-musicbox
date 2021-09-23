const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users = new Schema({
    user: { type: String, },
    pass: {
        type: String,
    },
});

module.exports = mongoose.model('users', users, 'users');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users = new Schema({
    email: { type: String, },
    pass: {
        type: String,
    },
    user: String,
    date: Date,
    gender: String,
});

module.exports = mongoose.model('users', users, 'users');
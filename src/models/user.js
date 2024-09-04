const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    _id : {type: Number, required: true },
    email: {type: String, required: true},

});

module.exports = mongoose.model('User', userSchema)
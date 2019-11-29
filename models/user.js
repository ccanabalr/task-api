'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
    name : String,
    surname: String,
    email: String,
    tasks: {type: Object, required: true}

});

module.exports = mongoose.model('User', userSchema);
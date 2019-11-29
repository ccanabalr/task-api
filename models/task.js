'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = Schema({
    name : String,
    date: String,
    state: String
});

module.exports = mongoose.model('Task', TaskSchema);
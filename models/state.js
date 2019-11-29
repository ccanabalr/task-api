'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Task = require('../models/state')

var stateSchema = Schema({
    name : String,
    tasks: {type: Object, required: true}
});

module.exports = mongoose.model('State', stateSchema);
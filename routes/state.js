'use strict'

var express = require('express');
var stateController = require('../controllers/state');


var api = express.Router();

//we define the routes of the state, task controller to access the resources


api.get('/states', stateController.getStates);
api.put('/states', stateController.updateState);
api.put('/save-task/:idState', stateController.saveTaskUpdate);

module.exports = api;
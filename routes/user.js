'use strict'

var express = require('express');
var userController = require('../controllers/user');


var api = express.Router();

//we define the routes of the user controller to access the resources

api.get('/users/:page?', userController.getUsers);
api.get('/user/:id', userController.getUser);
api.put('/user', userController.saveTaskInUser);


module.exports = api;
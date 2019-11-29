'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// load routes
var state_routes = require('./routes/state');
var user_routes = require('./routes/user');


// load middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// cors settings
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
 
    next();
});


//defining the routes
app.use('/api', state_routes);
app.use('/api', user_routes);



// export module
module.exports = app;

var mongoose = require('mongoose');
var State = require('../models/state')

mongoose.connect('mongodb+srv://ccanabalr:Canabal1027@cluster0-begzc.mongodb.net/task_db?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true})

//generate states in the database, to execute this file enter the command node seeds/seed-state.js

var states = [
    new State({
        name: 'open',
        tasks: []
    }),
    new State({
        name: 'in-progress',
        tasks: []
    }),
    new State({
        name: 'completed',
        tasks: []
    }),
    new State({
        name: 'archived',
        tasks: []
    }),
]

var done = 0;
for (let index = 0; index < states.length; index++) {
    states[index].save(function (err, result){
        done++;
        if (done === states.length) {
            exit();
        }
    })   
}

function exit(){
    mongoose.disconnect();
}
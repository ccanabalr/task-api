var mongoose = require('mongoose');
var User = require('../models/user')


mongoose.connect('mongodb+srv://ccanabalr:Canabal1027@cluster0-begzc.mongodb.net/task_db?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true})

//generate users in the database, to execute this file enter the command node seeds/seed-user.js

var users = [
    new User({
        name : 'Graciela',
        surname : 'Lozano',
        email : 'gracy@gmail.com',
        tasks : []
    }),
    new User({
        name : 'Maria',
        surname : 'Montenegro',
        email : 'maria@gmail.com',
        tasks : []
    }),
    new User({
        name : 'Carlos',
        surname : 'Canabal',
        email : 'carlos@gmail.com',
        tasks : []
    }),
    new User({
        name : 'Johnny',
        surname : 'Rivera',
        email : 'johnny@gmail.com',
        tasks : []
    }),
    new User({
        name : 'Eliecer',
        surname : 'Paternina',
        email : 'eliecer@gmail.com',
        tasks : []
    }),
    new User({
        name : 'Moraima',
        surname : 'Celeita',
        email : 'moraima@gmail.com',
        tasks : []
    }),
    new User({
        name : 'Jhon',
        surname : 'Martinez',
        email : 'jhon@gmail.com',
        tasks : []
    }),
    new User({
        name : 'Cristian',
        surname : 'Padilla',
        email : 'cristina@gmail.com',
        tasks : []
    }),
    new User({
        name : 'Laura',
        surname : 'Reales',
        email : 'laura@gmail.com',
        tasks : []
    }),
    new User({
        name : 'Freddy',
        surname : 'Barrios',
        email : 'freddy@gmail.com',
        tasks : []
    }),
    new User({
        name : 'Pedro',
        surname : 'Guzman',
        email : 'pedro@gmail.com',
        tasks : []
    }),
    
];


var done = 0;
for (let index = 0; index < users.length; index++) {
    users[index].save(function (err, result){
        done++;
        if (done === users.length) {
            exit();
        }
    })   
}

function exit(){
    mongoose.disconnect();
}


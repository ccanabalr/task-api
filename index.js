'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

//database connection
mongoose.Promise = global.Promise;

//'mongodb+srv://carlos:Canabal1027@cluster0-1e4jl.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect('mongodb+srv://ccanabalr:Canabal1027@cluster0-begzc.mongodb.net/task_db?retryWrites=true&w=majority', { useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true, 
useFindAndModify: false})
        .then(()=>{
            console.log("La conexion a la base de datos task_db se ha realizado con exito!!");

            //create server
            app.listen( process.env.PORT || 3800, () => {
                console.log("Servidor corriendo en  http://localhost:3800");
            })
        })
        .catch(err => console.log(err))
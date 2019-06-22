// Requires
var express = require('express');
var mogooose = require('mongoose');
var bodyParser = require('body-parser')


// Inicializar Variables
var app = express();

// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Importar rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');

//Conexion a BD
mogooose.connection.openUri('mongodb://localhost:27017/bancoEstudiantilDB', (err, res) => {

    if (err) throw err;
    console.log('Base de datos: \x1b[33m%s\x1b[0m', 'ONLINE');

});


// Rutas
app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/', appRoutes);


// Escuchar Peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[33m%s\x1b[0m', 'ONLINE');
});
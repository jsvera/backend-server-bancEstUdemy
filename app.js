// Requires
var express = require('express');
var mogooose = require('mongoose');


// Inicializar Variables
var app = express();

//Conexion a BD
mogooose.connection.openUri('mongodb://localhost:27017/bancoEstudiantilDB', (err, res) => {

    if (err) throw err;
    console.log('Base de datos: \x1b[33m%s\x1b[0m', 'ONLINE');

});


// Rutas
app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensaje: "Peticion realizada correctamente"
    });

});


// Escuchar Peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[33m%s\x1b[0m', 'ONLINE');
});
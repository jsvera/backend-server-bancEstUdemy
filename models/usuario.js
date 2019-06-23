var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol permitido'
};

var usuarioSchema = new Schema({

    dni: { type: String, unique: true, required: [true, 'La cédula es necesaria'] },
    nombres: { type: String, required: [true, 'Los nombres son obligatorios'] },
    apellidos: { type: String, required: [true, 'Los apellidos son obligatorios'] },
    email: { type: String, unique: true, required: [true, 'El correo es obligatorio'] },
    usuario: { type: String, unique: true, required: [true, 'El nombre de usuario es obligatorio'] },
    password: { type: String, required: [true, 'Debe ingresar una contraseña'] },
    img: { type: String, required: false },
    role: { type: String, required: true, default: 'USER_ROLE', enum: rolesValidos },
    google: { type: Boolean, default: false }

});

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

module.exports = mongoose.model('Usuario', usuarioSchema);
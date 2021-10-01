const mongoose = require('mongoose');
require('../repository/context');
const hash = require('object-hash');

const usuarioSchema = new mongoose.Schema({
    username: { type: String, required: true, minLength: 3, maxLength: 30 },
    password: { 
        type: String, 
        required: true,
        set: value => hash(value, { algorithm: 'md5', encoding: 'base64' })
    }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
const mongoose = require('mongoose');
require('../repository/context');

const clienteSchema = new mongoose.Schema({
    nome: { type: String, required: true, minLength: 3, maxLength: 50 },
    nascimento: { type: Date, required: true },
    cep: { type: String, required: true },
    cidade: { type: String, required: true },
    estado: { type: String, required: true, minLength: 2, maxLength: 2, uppercase: true }
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
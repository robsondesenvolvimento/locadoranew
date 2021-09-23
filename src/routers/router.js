const routing = require('express').Router();
const clienteController = require('../controllers/restapi-cliente')();

// Cliente
routing.get('/cliente', clienteController.getTodos)

module.exports = routing;
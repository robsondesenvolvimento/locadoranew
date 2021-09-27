const routing = require('express').Router();
const clienteController = require('../controllers/restapi-cliente')();

const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };

// Cliente
routing.get('/cliente', asyncMiddleware(clienteController.getTodos));
routing.post('/cliente/filtro', asyncMiddleware(clienteController.getCliente));
routing.get('/cliente/:id', asyncMiddleware(clienteController.id));

module.exports = routing;
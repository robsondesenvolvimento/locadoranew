const routing = require('express').Router();
const clienteController = require('../controllers/restapi-cliente')();
const authenticationController = require('../controllers/restapi-authentication')();

const asyncMiddleware = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };

// Authentication
routing.post('/login', asyncMiddleware(authenticationController.usuarioauth));
routing.get('/login', asyncMiddleware(authenticationController.getTodos));

// Cliente
routing.get('/cliente', asyncMiddleware(clienteController.getTodos));
routing.get('/cliente/:id', asyncMiddleware(clienteController.id));

module.exports = routing;
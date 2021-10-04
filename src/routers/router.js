const routing = require('express').Router();
const jwt = require('jsonwebtoken');
const clienteController = require('../controllers/restapi-cliente')();
const authenticationController = require('../controllers/restapi-authentication')();

const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next))
    .catch(next);
};

const verifyJWT = async (req, res, next) => {
  const token = await Promise.resolve(req.headers['x-access-token']);
  if (!token) return res.status(401).json({ auth: false, message: 'Token de autenticação não fornecido.' });

  await Promise.resolve(jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err) return res.status(401).json({ auth: false, message: 'Falha de autenticação' });

    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    next();
  }));
}

// Authentication
routing.post('/login', asyncMiddleware(authenticationController.usuarioauth));

// Cliente
routing.get('/cliente', asyncMiddleware(verifyJWT), asyncMiddleware(clienteController.getTodos));
routing.get('/cliente/:id', asyncMiddleware(verifyJWT), asyncMiddleware(clienteController.id));

module.exports = routing;
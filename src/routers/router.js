const routing = require('express').Router();
const jwt = require('jsonwebtoken');
const clienteController = require('../controllers/restapi-cliente')();
const authenticationController = require('../controllers/restapi-authentication')();
const cryptoService = require('../services/crypto-service')();

const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next))
    .catch(next);
};

const verifyJWT = async (req, res, next) => {
  const token = await Promise.resolve(req.headers.authorization)
    .then(authHeader => authHeader.split(' ')[1])
    .catch(x => req.headers['x-access-token']);

  if (!token) return res.status(401).json({ auth: false, message: 'Token de autenticação não fornecido.' });

  await Promise.resolve(jwt.verify(token, cryptoService.getkey(), function (err, decoded) {
    if (err) return res.status(401).json({ auth: false, message: 'Falha de autenticação' });

    req.userId = decoded.id;
    next();
  }));
}

// Authentication
routing.post('/login', asyncMiddleware(authenticationController.usuarioauth));

// Cliente
routing.get(/.*cliente\/?$/, asyncMiddleware(verifyJWT), asyncMiddleware(clienteController.getTodos));
routing.get(/.*cliente\/download\/?$/, asyncMiddleware(verifyJWT), asyncMiddleware(clienteController.downloadFile));
routing.get('/cliente/:id', asyncMiddleware(verifyJWT), asyncMiddleware(clienteController.id));
routing.post(/.*cliente\/?$/, asyncMiddleware(verifyJWT), asyncMiddleware(clienteController.insert));
routing.put(/.*cliente\/?$/, asyncMiddleware(verifyJWT), asyncMiddleware(clienteController.update));
routing.delete('/cliente/:id', asyncMiddleware(verifyJWT), asyncMiddleware(clienteController.delete));
routing.post(/.*cliente\/upload\/?$/, asyncMiddleware(verifyJWT), asyncMiddleware(clienteController.uploadFile));

module.exports = routing;
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Usuario = require('../schema/usuario-schema');
const usuarioRepository = require('../repository/usuario-repository')();
const cryptoService = require('../services/crypto-service')();
//const Usuario = require('../schema/usuario-schema');

const authenticationController = () => {

    const authController = {};

    authController.getTodos = async (request, response, next) => {
        try {
            await usuarioRepository.all(usuario => response.status(200).json(usuario));
        } catch (e) {
            next(e)
        }
    }

    authController.usuarioauth = async (req, res, next) => {
        try {
            var user = req.body;
            if (user.hasOwnProperty('username') && user.hasOwnProperty('password'))
                await usuarioRepository.usuario(user, usuario => {
                    if (usuario !== null) {

                        const token = jwt.sign({ usuario }, cryptoService.getkey(), {
                            expiresIn: '30m', // expires in 5min
                            algorithm: 'HS512'
                        });
                        return res.status(200).json({ auth: true, token: token });
                    }
                    else
                    res.status(200).json({ auth: false, message: 'Falha de autenticação' })
                });                
        } catch (e) {
            next(e)
        }
    }

    return authController;
}

module.exports = authenticationController;
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { use } = require('../routers/router');
const Usuario = require('../schema/usuario-schema');
const usuarioRepository = require('../repository/usuario-repository')();
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

                        const token = jwt.sign({ usuario }, process.env.SECRET, {
                            expiresIn: 300, // expires in 5min
                            algorithm: 'HS512'
                        });
                        return res.status(200).json({ auth: true, token: token });
                    }
                });
        } catch (e) {
            next(e)
        }
    }

    return authController;
}

module.exports = authenticationController;
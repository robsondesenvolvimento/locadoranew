const mongoose = require('mongoose');
const { use } = require('../routers/router');
const Usuario = require('../schema/usuario-schema');
const usuarioRepository = require('../repository/usuario-repository')();
//const Usuario = require('../schema/usuario-schema');

const authenticationController = () => {

    const authController = {};

    authController.getTodos = async (request, response, next) => {
        try{
            await usuarioRepository.all(usuario => response.status(200).json(usuario));
        }catch(e){
            next(e)
        }            
    }

    authController.usuarioauth = async (req, res, next) => {
        try{
            var user = req.body;
            await usuarioRepository.usuario(user, usuario => {
                if (usuario !== null)
                    res.status(200).json(usuario);
                else
                    res.status(401).json({ statusCode: "ERR0001", message: "Acesso negado." });
            });

            //var texto = await Promise.resolve(`corpo: ${req.body}`).catch(next);
            //await res.status(200).json(texto)
        }catch(e){
            next(e)
        }         
    }

    return authController;
}

module.exports = authenticationController;
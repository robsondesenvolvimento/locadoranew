const mongoose = require('mongoose');
const Usuario = require('../schema/usuario-schema');
const chalk = require('chalk');

const usuarioRepository = () => {

    const controllerUsuarioRepository = {};

    controllerUsuarioRepository.seeding = async (callback) => {

        var existeUsuario = await Usuario.exists();

        if (!existeUsuario) {
            await Usuario.insertMany([
                {
                    username: "robson.alves",
                    password: "MinhaSenha@2021"
                },
                {
                    username: "henrique.casagrande",
                    password: "MinhaSenha@2021"
                }
            ]).then(() => {
                console.log(chalk.bgGreenBright(chalk.black("Lista de usuários criada com sucesso.")));
            });
        }

        const listaUsuarios = await Usuario.find();

        if (listaUsuarios !== null) {
            callback(listaUsuarios);
        }
    }

    controllerUsuarioRepository.all = async (callback) => {
        const listaUsuarios = await Usuario.find();

        if (listaUsuarios !== null) {
            callback(listaUsuarios);
        }
    }

    controllerUsuarioRepository.id = async (id, callback) => {
        const usuario = await Usuario.findById(id).exec();

        if (usuario !== null) {
            callback(usuario);
        }
    }

    controllerUsuarioRepository.usuario = async (usuario, callback) => {
        const user = await Usuario.findOne(usuario).exec();

        if (user !== null) {
            return callback(user);
        };
        callback(null)
    }

    return controllerUsuarioRepository;
}

module.exports = usuarioRepository;
const mongoose = require('mongoose');
const Cliente = require('../schema/cliente-schema');
const chalk = require('chalk');

const clienteRepository = () => {

    const controllerClienteRepository = {};    

    controllerClienteRepository.seeding = async (callback) => {        

        var existeCliente = await Cliente.exists();

        if (!existeCliente) {
            await Cliente.insertMany([
                {
                    nome: "Robson Candido dos Santos Alves",
                    nascimento: new Date('2021-08-29'),
                    cep: "80210-110",
                    cidade: "Curitiba",
                    estado: "PR"
                },
                {
                    nome: "Henrique Casagrande dos Santos Alves",
                    nascimento: new Date('2019-07-21'),
                    cep: "80210-110",
                    cidade: "Curitiba",
                    estado: "PR"
                }
            ]).then(() => {
                console.log(chalk.bgGreenBright(chalk.black("Lista de clientes criada com sucesso.")));
            });
        }

        const listaClientes = await Cliente.find();

        if (listaClientes !== null) {
            console.log(chalk.bgGreenBright(chalk.black("Lista de clientes.")));
            callback(listaClientes);
        }
    }

    controllerClienteRepository.all = async (callback) => {
        const listaClientes = await Cliente.find();

        if (listaClientes !== null) {
            console.log(chalk.bgGreenBright(chalk.black("Lista de clientes.")));
            callback(listaClientes);
        }
    }

    controllerClienteRepository.id = async (id, callback) => {
        const cliente = await Cliente.findById(id).exec();

        if (cliente !== null) {
            console.log(chalk.bgGreenBright(chalk.black("Cliente localizado.")));
            callback(cliente);
        }
    }

    return controllerClienteRepository;

}

module.exports = clienteRepository;
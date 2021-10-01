const mongoose = require('mongoose');
require('../repository/context');
const chalk = require('chalk');

const clienteSchema = new mongoose.Schema({
    nome: { type: String, required: true, minLength: 3, maxLength: 50 },
    nascimento: { type: Date, required: true },
    cep: { type: String, required: true },
    cidade: { type: String, required: true },
    estado: { type: String, required: true, minLength: 2, maxLength: 2, uppercase: true }
});

const Cliente = mongoose.model('Cliente', clienteSchema);

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
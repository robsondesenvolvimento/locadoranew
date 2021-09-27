const mongo = require('mongodb');
const mongodbConn = require('../repository/context')();
const chalk = require('chalk');

const clienteRepository = () => {

    const controllerClienteRepository = {};

    controllerClienteRepository.seeding = async (callback) => {

        await mongodbConn.conectar(async database => {
            const clienteCollection = database.collection("cliente");        
            const totalDocumentos = await clienteCollection.estimatedDocumentCount();
        
            const clientes = [
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
            ];

            const options = { ordered: true };
        
            if (totalDocumentos === 0)
                await clienteCollection.insertMany(clientes, options);
        
            const listaClientes = await clienteCollection.find().toArray();
            if (listaClientes !== null){
                console.log(chalk.bgGreenBright(chalk.black("Lista de clientes.")));
                callback(listaClientes);
            }
                
        })
    }

    controllerClienteRepository.all = async (callback) => {

        await mongodbConn.conectar(async database => {
            const clienteCollection = database.collection("cliente");        
            //const totalDocumentos = await clienteCollection.estimatedDocumentCount();
        
            const listaClientes = await clienteCollection.find().toArray();
            if (listaClientes !== null){
                console.log(chalk.bgGreenBright(chalk.black("Lista de clientes.")));
                callback(listaClientes);
            }
                
        })
    }

    controllerClienteRepository.find = async (cliente, callback) => {
        await mongodbConn.conectar(async database => {
            const clienteCollection = database.collection("cliente");

            const options = {
                // sort matched documents in descending order by rating
                sort: { "nome": -1 },
                // Include only the `title` and `imdb` fields in the returned document
                //projection: { _id: 0, nome: 1, nascimento: 1 },
            };

            locate = await clienteCollection.findOne(cliente, options);
            if (locate !== null){
                console.log(chalk.bgGreenBright(chalk.black("Documento de cliente loalizado.")));
                console.log(locate);
                callback(locate);
            }
        });
    }

    controllerClienteRepository.id = async (id, callback) => {
        await mongodbConn.conectar(async database => {
            const clienteCollection = database.collection("cliente");

            const options = {
                // sort matched documents in descending order by rating
                sort: { "nome": -1 },
                // Include only the `title` and `imdb` fields in the returned document
                //projection: { _id: 0, nome: 1, nascimento: 1 },
            };

            // 614dd2cb896c3942a842bd66
            // 614dd2cb896c3942a842bd67
            const mongoId = new mongo.ObjectId(id);
            locate = await clienteCollection.findOne({"_id": mongoId}, options);
            if (locate !== null){
                console.log(chalk.bgGreenBright(chalk.black("Documento de cliente loalizado.")));
                console.log(locate);
                callback(locate);
            }
        });
    }

    return controllerClienteRepository;

}

module.exports = clienteRepository;
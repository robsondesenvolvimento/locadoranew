const mongoose = require('mongoose');
require('../repository/context');
const chalk = require('chalk');

const clienteRepository = () => {

    const controllerClienteRepository = {};

    const clienteSchema = new mongoose.Schema({
        nome: { type: String, required: true, minLength: 3, maxLength: 50 },
        nascimento: { type: Date, required: true },
        cep: { type: String, required: true },
        cidade: { type: String, required: true },
        estado: { type: String, required: true, minLength: 2, maxLength: 2, uppercase: true }
    });


    controllerClienteRepository.seeding = async (callback) => {

        //const uri = `mongodb://${username}:${password}@${host}:${port}/${namedb}`;
        // const uri = `mongodb+srv://${username}:${password}@${host}/${namedb}?retryWrites=true&w=majority`;

        // await mongoose.connect(uri, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        // });

        const Cliente = mongoose.model('Cliente', clienteSchema);

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

    // controllerClienteRepository.all = async (callback) => {

    //     await mongodbConn.conectar(async database => {
    //         const clienteCollection = database.collection("cliente");        
    //         //const totalDocumentos = await clienteCollection.estimatedDocumentCount();

    //         const listaClientes = await clienteCollection.find().toArray();
    //         if (listaClientes !== null){
    //             console.log(chalk.bgGreenBright(chalk.black("Lista de clientes.")));
    //             callback(listaClientes);
    //         }

    //     })
    // }

    // controllerClienteRepository.find = async (cliente, callback) => {
    //     await mongodbConn.conectar(async database => {
    //         const clienteCollection = database.collection("cliente");

    //         const options = {
    //             // sort matched documents in descending order by rating
    //             sort: { "nome": -1 },
    //             // Include only the `title` and `imdb` fields in the returned document
    //             //projection: { _id: 0, nome: 1, nascimento: 1 },
    //         };

    //         locate = await clienteCollection.findOne(cliente, options);
    //         if (locate !== null){
    //             console.log(chalk.bgGreenBright(chalk.black("Documento de cliente loalizado.")));
    //             console.log(locate);
    //             callback(locate);
    //         }
    //     });
    // }

    // controllerClienteRepository.id = async (id, callback) => {
    //     await mongodbConn.conectar(async database => {
    //         const clienteCollection = database.collection("cliente");

    //         const options = {
    //             // sort matched documents in descending order by rating
    //             sort: { "nome": -1 },
    //             // Include only the `title` and `imdb` fields in the returned document
    //             //projection: { _id: 0, nome: 1, nascimento: 1 },
    //         };

    //         // 614dd2cb896c3942a842bd66
    //         // 614dd2cb896c3942a842bd67
    //         const mongoId = new mongo.ObjectId(id);
    //         locate = await clienteCollection.findOne({"_id": mongoId}, options);
    //         if (locate !== null){
    //             console.log(chalk.bgGreenBright(chalk.black("Documento de cliente loalizado.")));
    //             console.log(locate);
    //             callback(locate);
    //         }
    //     });
    // }

    return controllerClienteRepository;

}

module.exports = clienteRepository;
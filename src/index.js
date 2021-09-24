const restapi = require('./controllers/restapi-controllers')();
const mongodbConn = require('./repository/context')();
const chalk = require('chalk');

mongodbConn.conectar(async database => {
    const cliente = database.collection("cliente");

    const totalDocumentos = await cliente.estimatedDocumentCount();

    const cli = { 
        nome: "Robson Candido dos Santos Alves", 
        nascimento: new Date('2021-08-29'), 
        cep: "80210-110", 
        cidade: "Curitiba", 
        estado: "PR"
    }

    if (totalDocumentos === 0)
        await cliente.insertOne(cli);

    const locate = await cliente.findOne(cli);
    if (locate !== null){
        console.log(chalk.bgGreenBright(chalk.black("Documento de cliente loalizado.")));
        console.log(locate);
    }
        
})

restapi;
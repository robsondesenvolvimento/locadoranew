const restapi = require('./controllers/restapi-controllers')();
const clienteRepository = require('./repository/cliente-repository')();

// Faz uma verificação de existem documentos de clientes cadastrados, se for zero inicia a coleção em um cliente padrão
(async() => await clienteRepository.seeding(cliente => console.log(cliente)))();

// Inicia a API RESTful
restapi;
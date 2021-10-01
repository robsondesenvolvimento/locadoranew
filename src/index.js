const restapi = require('./controllers/restapi-controllers')();
const clienteRepository = require('./repository/cliente-repository')();
const usuarioRepository = require('./repository/usuario-repository')();

// Faz seeding inicial se a coleção de dados não existir.
(async() => {
    await clienteRepository.seeding(cliente => console.log(cliente));
    await usuarioRepository.seeding(usuario => console.log(usuario));
})();

// Inicia a API RESTful
restapi;
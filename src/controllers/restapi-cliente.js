const clienteRepository = require('../repository/cliente-repository')();

const clienteController = () => {

    const clienteController = {};

    clienteController.getTodos = async (request, response, next) => {
        try{
            await clienteRepository.all(cliente => response.status(200).json(cliente));
        }catch(e){
            next(e)
        }              
    }

    clienteController.id = async (request, response, next) => {
        try{
            const id = request.params.id;

            await clienteRepository.id(id, cliente => response.status(200).json(cliente));
            //var texto = await Promise.resolve("TODOS - Cliente").catch(next);
        }catch(e){
            next(e)
        }              
    }

    clienteController.insert = async (request, response, next) => {
        try{
            const clie = request.body;

            await clienteRepository.insertClient(clie, cliente => response.status(200).json(cliente));
            //var texto = await Promise.resolve("TODOS - Cliente").catch(next);
        }catch(e){
            next(e)
        }              
    }

    return clienteController;
}

module.exports = clienteController;
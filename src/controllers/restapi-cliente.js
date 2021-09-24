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

    clienteController.getCliente = async (request, response, next) => {
        try{
            const cli = request.body;

            await clienteRepository.find(cli, cliente => response.status(200).json(cliente));
            //var texto = await Promise.resolve("TODOS - Cliente").catch(next);
            
        }catch(e){
            next(e)
        }              
    }

    return clienteController;
}

module.exports = clienteController;
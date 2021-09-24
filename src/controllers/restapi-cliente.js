const clienteController = () => {

    const clienteController = {};

    clienteController.getTodos = async (request, response, next) => {
        try{
            var texto = await Promise.resolve("TODOS - Cliente").catch(next);;  
            response.status(200).json(texto)
        }catch(e){
            next(e)
        }              
    }

    return clienteController;
}

module.exports = clienteController;
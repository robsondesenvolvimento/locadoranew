const clienteController = () => {

    const clienteController = {};

    clienteController.getTodos = async (request, response) => {
        await Promise(resolve => 
            resolve(response.status(200).json("TODOS - Cliente"))
        );        
    }

    return clienteController;
}

module.exports = clienteController;
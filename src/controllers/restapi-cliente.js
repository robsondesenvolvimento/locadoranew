const fs = require('fs');
const formidable = require('formidable');
const clienteRepository = require('../repository/cliente-repository')();

const clienteController = () => {

    const clienteController = {};

    clienteController.getTodos = async (request, response, next) => {
        try {
            await clienteRepository.all(cliente => response.status(200).json(cliente));
        }catch(e){
            next(e)
        }              
    }

    clienteController.id = async (request, response, next) => {
        try {
            const id = request.params.id;
            await clienteRepository.id(id, cliente => response.status(200).json(cliente));
            //var texto = await Promise.resolve("TODOS - Cliente").catch(next);
        }catch(e){
            next(e)
        }              
    }

    clienteController.insert = async (request, response, next) => {
        try {
            const clie = request.body;
            await clienteRepository.insertClient(clie, cliente => response.status(201).json(cliente));
            //var texto = await Promise.resolve("TODOS - Cliente").catch(next);
        }catch(e){
            next(e)
        }              
    }

    clienteController.update = async (request, response, next) => {
        try {
            const clie = request.body;
            await clienteRepository.updateClient(clie, cliente => response.status(200).json(cliente));
        }catch(e) {
            next(e);
        }
    }

    clienteController.delete = async (request, response, next) => {
        try {
            const id = request.params.id;
            await clienteRepository.deleteClient(id, cliente => {
                if (cliente)
                    response.status(204).json("")
                else
                    response.status(404).json("");
            });
        }catch(e) {
            next(e);
        }
    }

    clienteController.upload = async (request, response, next) => {
        //return response.json(request.files.file);
        const sampleFile = request.files.file;
        uploadPath = 'src/upload/' + sampleFile.name;
        sampleFile.mv(uploadPath, function(err) {
            if (err)
              return response.status(500).send(err);
        
            response.send('File uploaded!');
          });
        //let caminho = tempFilePath.replace('\\', '/');
        //caminho = caminho.replace('\\\\', '/');
        //return response.json(tempFilePath);
        //var arquivoStream = fs.createReadStream(`../${tempFilePath}`);
        //arquivoStream.on('open', () => arquivoStream.pipe(response));
        // const form = new formidable.IncomingForm();

        // form.parse(request, (err, fields, files) => {
        //     if (err) {
        //         next(err);
        //         return;
        //     }

        //     const { type, name, path, size } = files.file

        //     var arquivoStream = fs.createReadStream(path)
        //     arquivoStream.on('open', () => arquivoStream.pipe(response));
        //     //response.json({ fields, files });
        //});
    }

    return clienteController;
}

module.exports = clienteController;
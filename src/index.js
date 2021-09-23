const awaitLogAsync = require('./common/awaitLogAsync')

awaitLogAsync(`Iniciando execução da api locadora...`, () => console.log("Tarefa executada"));
awaitLogAsync(`Terminando execução da api locadora...`);
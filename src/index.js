// Chama uma promisse e retorna log com data no formato ISO e opcionalmente executa uma tarefa.
function awaitMessageAsync(log, fn){
    var promisse = async () => await new Promise(resolve => resolve(new Date().toISOString()));
    promisse().then(date => {
        console.log(`${date} ${log}`)
        if (fn !== undefined) fn();
    });
}

awaitMessageAsync(`Iniciando execução da api locadora...`, () => console.log("Tarefa executada"));
awaitMessageAsync(`Terminando execução da api locadora...`);
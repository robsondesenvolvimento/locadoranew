const { MongoClient } = require("mongodb");
const configuration = require('../config/configuration');
const chalk = require('chalk');

const mongodbConn = async () => {

    const { host } = configuration.database;
    const { username } = configuration.database;
    const { password } = configuration.database;

    const uri = `mongodb://${username}:${password}@${host}:27017`;
    const client = new MongoClient(uri);

    try {
        // Connect the client to the server
        await client.connect();
        // Establish and verify connection
        await client.db("admin").command({ ping: 1 });
        console.log(chalk.bgYellowBright(chalk.black("Connected successfully to server")));

        const database = client.db("locadora");
        const cliente = database.collection("cliente");

        const cli = { nome: "Robson Candido dos Santos Alves", username: "robson", password: "123456"}
        await cliente.insertOne(cli);

      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }

}

module.exports = mongodbConn;
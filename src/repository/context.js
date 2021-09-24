const { MongoClient } = require("mongodb");
const configuration = require('../config/configuration');
const chalk = require('chalk');

const mongodbConn = () => {

    const { host } = configuration.database;
    const { username } = configuration.database;
    const { password } = configuration.database;

    const uri = `mongodb://${username}:${password}@${host}:27017`;
    const client = new MongoClient(uri);

    const controllerMongo = {};

    controllerMongo.conectar = async (callback) => {
      try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log(chalk.bgYellowBright(chalk.black("Connected successfully to server")));
        const database = client.db("locadora");
        callback(database);
      } catch {
        await client.close();
      }
    }

    return controllerMongo
}

module.exports = mongodbConn;
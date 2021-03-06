const mongoose = require('mongoose');
const configuration = require('../config/configuration');
const chalk = require('chalk');

const { host } = configuration.database;
const { port } = configuration.database;
const { username } = configuration.database;
const { password } = configuration.database;
const { namedb } = configuration.database;

const uri = `mongodb://${username}:${password}@${host}/${namedb}?retryWrites=true&w=majority`;

var conn = mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000
}, 60000)
.catch(err => console.log(err));

module.exports = conn;
const mongoose = require('mongoose');
const configuration = require('../config/configuration');
const chalk = require('chalk');

const { host } = configuration.database;
const { port } = configuration.database;
const { username } = configuration.database;
const { password } = configuration.database;
const { namedb } = configuration.database;

const uri = `mongodb+srv://${username}:${password}@${host}/${namedb}?retryWrites=true&w=majority`;

var conn = mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = conn;
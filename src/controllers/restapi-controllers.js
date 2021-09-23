const express = require('express');
const routing = require('../routers/router');
const configuration = require('../config/configuration');
const chalk = require('chalk');

const restapi = () => {

    const app = express();
    const { host } = configuration.express;
    const { port } = configuration.express;

    app.use('/', routing);

    app.listen(port, () => {
        console.log(chalk.bgBlueBright(chalk.black(`App listening at http://${host}:${port}/`)));
    })

}

module.exports = restapi;
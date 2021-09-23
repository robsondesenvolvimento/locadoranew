const express = require('express');
const routing = require('../routers/router');
const configuration = require('../config/configuration');

const restapi = () => {

    const app = express();
    const { host } = configuration.express;
    const { port } = configuration.express;

    app.use('/', routing);

    app.listen(port, () => {
        console.log(`app listening at http://${host}:${port}/`);
    })

}

module.exports = restapi;
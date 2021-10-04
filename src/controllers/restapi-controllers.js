const express = require('express');
const routing = require('../routers/router');
const configuration = require('../config/configuration');
const chalk = require('chalk');

function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
  }

function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
      res.status(500).send({ error: 'Something failed!' });
    } else {
      next(err);
    }
}

  function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', { error: err });
  }

const restapi = () => {

    const app = express();
    app.use(express.json());
    
    const { host } = configuration.express;
    const { port } = configuration.express;

    app.use('/', routing);

    app.use(logErrors);
    app.use(clientErrorHandler);
    app.use(errorHandler);

    // app.use((err, req, res, next) => {
    //     console.error(err.stack);
    //     res.status(500).send('Something broke!');
    // })

    app.listen(port, () => {
        console.log(chalk.bgBlueBright(chalk.black(`App listening at http://${host}:${port}/`)));
    })

}

module.exports = restapi;
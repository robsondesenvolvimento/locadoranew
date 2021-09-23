const restapi = require('./controllers/restapi-controllers')();
const mongodbConn = require('./repository/context')();

mongodbConn;

restapi;
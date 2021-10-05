const crypto = require("crypto");
const fs = require('fs');
require('buffer');

const cryptoService = () => {

    const cryptoServiceControllers = {};    

      cryptoServiceControllers.getkey = () => {
        const keyPrivate = fs.readFileSync('./locadora_rsa.key');
        return keyPrivate;
        //var emBase64 = Buffer.from(keyPrivate, 'base64');
        //return emBase64;
      }

      return cryptoServiceControllers;
}

module.exports = cryptoService;
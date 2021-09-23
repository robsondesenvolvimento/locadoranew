const yaml = require('js-yaml');
const fs = require('fs');

const env = process.env.NODE_ENV || 'prod';

if (env === 'prod') {
  console.log('Modo de produção iniciado.');
} else if (env === 'dev') {
  console.log('Mode de desenvolvimento iniciado.');
}

const file = fs.readFileSync(`./src/config/${env}.yaml`, 'utf8');
const configuration = yaml.load(file);

module.exports = configuration;
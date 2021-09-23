const yaml = require('js-yaml');
const fs = require('fs');
const chalk = require('chalk');

const env = process.env.NODE_ENV || 'prod';

if (env === 'prod') {
  console.log(chalk.bgBlueBright(chalk.black(`Modo de produção iniciado.`)));
} else if (env === 'dev') {
  console.log(chalk.bgBlueBright(chalk.black(`Mode de desenvolvimento iniciado.`)));
}

const file = fs.readFileSync(`./src/config/${env}.yaml`, 'utf8');
const configuration = yaml.load(file);

module.exports = configuration;
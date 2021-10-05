# Locadora
Apresentação do projeto de locadora para o curso de Node.Js Avançado.

# Instanciando o banco de dados MongoDB no Docker
- > Pode ser alterado o usuário e senha no arquivo docker-compose.yml.
- > O padrão é usuário localhost e senha localhost

- > Crie o container com o arquivo docker-compose.yml
```shell
$ cd mongodb
$ docker-compose up -d
$ docker exec -it mongodb-robson bash
# mongo
> use admin
> db.createUser({user: "root", pwd: "root", roles:["root"]});
> use locadora
> db.createUser({user: "locadora", pwd: "locadora", roles:[{role: "readWrite", db: "locadora"}]});
> ctrl^c
#
```
- > Descomente a linha 13 #command: [--auth] no arquivo docker-compose.yml
```shell
$ docker-compose up -d
$ docker exec -it mongodb-robson bash
# mongo -u root -p root --authenticationDatabase admin
> ctrl^c
# mongo -u locadora -p locadora --authenticationDatabase locadora
```

# Inicialização da aplicação.
- > Se foi alterado o usuário e senha do mongodb no docker ajuste estes no arquivo de configuração da aplicação dentro da pasta config/dev.yaml

 ```shell
$ npm install
$ npm run start-dev
 ```

 # Alternativa para instanciar um container da locadora.

  ```shell
$ docker build . -t locadora
$ docker run -p 3000:3000 -d locadora
 ```

 # References
 - > https://docs.mongodb.com/drivers/node/current/usage-examples/count/
 - > https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
 - > https://mongodb.github.io/node-mongodb-native/api-generated/collection.html
 - > https://mongoosejs.com/docs/schematypes.html
 - > https://github.com/auth0/node-jsonwebtoken
 - > https://www.npmjs.com/package/object-hash
 - > https://expressjs.com/pt-br/guide/routing.html
 - > https://www.luiztools.com.br/post/autenticacao-json-web-token-jwt-em-nodejs/
 - > https://www.sohamkamani.com/nodejs/rsa-encryption/
 - > https://blog.logrocket.com/node-js-crypto-module-a-tutorial/
 - > https://www.techengineer.one/how-to-encrypt-decrypt-strings-with-rsa-in-node-js/
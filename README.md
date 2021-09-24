# Locadora
Apresentação do projeto de locadora para o curso de Node.Js Avançado.

# Instanciando o banco de dados MongoDB no Docker
- > Pode ser alterado o usuário e senha no arquivo docker-compose.yml.
- > O padrão é usuário root e senha 123456

```shell
$ cd mongodb
$ docker-compose up -d
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
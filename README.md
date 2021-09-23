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
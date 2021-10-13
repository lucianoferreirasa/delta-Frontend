# ✨ CRUD Delta
## Este é um projeto desenvolvido para o processo seletivo Delta.
> Desenvolvido utilizando Visual Studio Code
> Este Frontend foi criado utilizando React

> 💻 É necessário o download de algumas tecnologias para o total funcionamento da aplicação, integrando o Backend com o Frontend:


* [Docker](https://www.docker.com/get-started) "Entrega software em pacotes chamados contêineres"
* [DBeaver](https://dbeaver.com/download/) "Ferramenta de administração de banco de dados"
* [Postgres](https://www.postgresql.org/download/) "Banco de dados"
* [Insomnia](https://insomnia.rest/pricing) "É um programa que testa as requisições de uma API(GET, POST, PUT, DELETE, PATCH, etc)."
* [NodeJS](https://nodejs.org/en/)


>Obs
Se você já possui o Docker, execute o comando:
docker run --name postgres-db -e POSTGRES_PASSWORD=123456 -p 5432:5432 -d postgres

## Se não possuir o docker instalado, instale-o e ao terminar:
Abra o Docker e crie um container em que conste o nome de postgres-db com o banco de dados Postgres, e asenha 123456, rodando na porta 5432
Em seguida, abra o DBeaver conectando ao Postgres, e crie um Banco de Dados com o nome "delta". Agora crie uma tabela com o nome students.

Foram utilizadas as seguintes tecnologias no projeto
* [Express](https://expressjs.com/pt-br/starter/installing.html)
* [Typeorm](https://www.npmjs.com/package/typeorm)
* [Uuid](https://www.npmjs.com/package/uuid)
* [Reflect-metadata](https://www.npmjs.com/package/reflect-metadata)
* [Cors](https://www.npmjs.com/package/cors)
* [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) 
* [Typescript](https://www.typescriptlang.org/download)
* [Axios](https://www.npmjs.com/package/axios)

# Execução

## Clone este repositório
$ git clone https://github.com/lucianoferreirasa/Delta

## Executar aplicação
$ yarn start


> O projeto
Foi desenvolvido um menu que leva a um CRUD de alunos, com armazenamento no banco de dados.

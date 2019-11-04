<h1 align="center">
  <img alt="Gympoint" title="Gympoint" src="https://i.imgur.com/8Y4oSIa.png" width="200px" />
</h1>

<h3 align="center">
  Bootcamp application
</h3>

<p align="center">

  <img alt="GitHub top language" src="https://img.shields.io/badge/Javascript-98.0%25-blue">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ArthurJFreitas/GymPoint.svg">
  
  <a href="https://www.codacy.com/manual/ArthurJFreitas/GymPoint?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ArthurJFreitas/GymPoint&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy grade" src="https://api.codacy.com/project/badge/Grade/8c088bc5bc6748f0b6ad047a5c6e5cfc">
  </a>
  
  <a href="https://github.com/jopcmelo/gostack-gympoint/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/ArthurJFreitas/GymPoint?style=social">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/ArthurJFreitas/GymPoint.svg">
  <a href="https://github.com/ArthurJFreitas/GymPoint/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/ArthurJFreitas/GymPoint.svg">
  </a>
</p>

## Overview

This is a repository made in bootcamp gostack of [Rocketseat](http://rocketseat.com.br).

This is an application ...

## Preparing and running application

> Cloning repository:

```shell
  ~ git clone https://github.com/ArthurJFreitas/GymPoint.git
  ~ cd GymPoint/
```

> Installing dependencies:

```shell
  ~ yarn install
  or
  ~ npm install
```

> Setting up database

To the database you need to have a SQL database remote or localy. All sensible configs should be setted in environment as `environments variables`.

To make this localy, just create a .env file in root of application and put the values like the template `.env.example` file with the values that you want.

```shell
DB_HOST=localhost
DB_USER=postgres
DB_PASS=gympoint
DB_NAME=gympoint
```

> Preparing database

To prepare the database, you need to use Sequelize CLI, so to create and prepare database to use, just run:

```shell
  ~ yarn sequelize db:create
  ~ yarn sequelize db:migrate
  ~ yarn sequelize db:seed:all
```

If database already exists, just run the bellow command to delete it.

```shell
  ~ yarn sequelize db:drop
```

> Using Docker and Docker Compose

You can set your database with Docker and Docker Compose, using the follow commands:

```shell
  ~ cd ..
  ~ docker-compose up -d
```
## :memo: License
This project is under the MIT license. See the [LICENSE](https://github.com/ArthurJFreitas/GymPoint/blob/master/LICENSE) for more information.

---

Arthur Junio :wave: [Get in touch!](https://www.linkedin.com/in/arthur-junio32/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint


# course-alura-graphql

Result of [Alura](https://alura.com.br) courses:

- **[GraphQL parte 1: Primeiros passos](https://cursos.alura.com.br/course/graphql)**
- **[GraphQL parte 2: Substituindo uma API REST](https://cursos.alura.com.br/course/graphql-parte-dois)**
- **[GraphQL parte 3: Integrando com sua aplicação](https://www.alura.com.br/curso-online-graphql-integrando-com-front-end)**

## Stack

- **Frontend:** [Node.js](https://nodejs.org), [React](https://reactjs.org), [Apollo GraphQL](https://www.apollographql.com/)
- **Backend:** [Node.js](https://nodejs.org), [Express](https://expressjs.com), [GraphQL Yoga](https://github.com/prisma-labs/graphql-yoga)
- **DBMS:** [MySQL](https://mysql.com)
- **Runner:** [Docker](https://docker.com)

## How to use

### Project [agenda-petshop](https://github.com/juunegreiros/agenda-petshop):

- **Up**

  ```bash
  docker-compose -p agenda-petshop up -d
  ```

- **Down**

  ```bash
  docker-compose -p agenda-petshop down
  ```

- **Let's go**

  | Services    | URL                    |
  |------------:|:-----------------------|
  | React Front | https://localhost:3000 |
  | Rest API    | https://localhost:4001 |
  | GraphQL API | https://localhost:4000 |

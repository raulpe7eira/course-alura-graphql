# Agenda Petshop GraphQL API
# VERSION 0.0.1

FROM node:12.12.0

COPY agenda-petshop-api-graphql/ /usr/api
WORKDIR /usr/api

RUN npm install
ENTRYPOINT sh -c './wait-for-it.sh $DB_MYSQL_HOST:$DB_MYSQL_PORT -- npm start'

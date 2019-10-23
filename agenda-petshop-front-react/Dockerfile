# Agenda Petshop React Front
# VERSION 0.0.1

FROM node:12.12.0

COPY agenda-petshop-front-react/ /usr/front
WORKDIR /usr/front

RUN npm install && npm rebuild node-sass
ENTRYPOINT sh -c './wait-for-it.sh $REACT_APP_API_GRAPHQL_HOST:$REACT_APP_API_GRAPHQL_PORT -- ./wait-for-it.sh $REACT_APP_API_REST_HOST:$REACT_APP_API_REST_PORT -- npm start'

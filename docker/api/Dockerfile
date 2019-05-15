FROM node:8

ARG port=3000

WORKDIR /usr/src/app

COPY '../../node_modules/@centcom/server/package*.json' ./

RUN npm install

COPY '../../node_modules/@centcom/server/' .
COPY '../../config/' ./config

CMD [ 'npm', 'build' ]

EXPOSE $port

CMD [ 'npm', 'start' ]
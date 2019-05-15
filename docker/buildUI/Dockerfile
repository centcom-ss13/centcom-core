FROM node:8

ARG port=80

WORKDIR /usr/src/app

COPY './package*.json' ./

RUN npm install

COPY . .

CMD [ 'npm', 'build' ]

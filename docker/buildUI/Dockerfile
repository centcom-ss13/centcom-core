FROM node:8

ARG port=80

WORKDIR /usr/src/app

COPY './node_modules/@centcom/ui/package*.json' ./

RUN npm install

COPY './node_modules/@centcom/ui/' .

CMD [ 'npm', 'build' ]
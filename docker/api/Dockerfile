FROM node:8

ARG port=3000

WORKDIR /usr/src/app

COPY "./package*.json" ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE $port

CMD [ "npm", "start" ]
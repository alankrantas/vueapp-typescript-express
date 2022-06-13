FROM node:16-alpine

RUN mkdir -p /usr/src/vueapp
WORKDIR /usr/src/vueapp

COPY ./dist /usr/src/vueapp/dist
COPY server.js /usr/src/vueapp/server.js
COPY service.js /usr/src/vueapp/service.js
COPY deploy-package.json /usr/src/vueapp/package.json

RUN npm install
RUN npm prune

EXPOSE 3000

CMD node server.js 0.0.0.0 3000

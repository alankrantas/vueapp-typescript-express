# A Vue.js Demo Web App with Express Backend Service and MongoDB - Full-Stack, Containerized JavaScript

This is a simple shopping demo app, based on the [Vue 3](https://vuejs.org/) / [TypeScript](https://www.typescriptlang.org/) examples in [_Essential Typescript_](https://github.com/Apress/essential-typescript-4) by Adam Freeman, which use [Vue Router](https://router.vuejs.org/) for routing, [Vuex](https://vuex.vuejs.org/) for data store and Bootstrap 5 for CSS styles.

The major difference are:

* Overhauled Optional API to the newer, more concise [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html) for all Vue.js components, including typed props and custom events. 
* Added a simple transition effect for switching product categories.
* Added a _Clear Order_ button and some minor logic/style adjustment.
* Use [Node.js](https://nodejs.org/en/) + [Express](https://expressjs.com/) as frontend server as well as the backend REST APIs.
* Use [MongoDB](https://www.mongodb.com/) as database.
* Use [Docker Compose](https://docs.docker.com/compose/) to deploy both web server and MongoDB as Docker containers. Or, you can only run MongoDB as container.

![vue](https://user-images.githubusercontent.com/44191076/158605142-f6e01254-a794-4a09-9544-e9435a09e706.png)

## Prepare the Project

Install Node.js and [Docker Desktop](https://docs.docker.com/desktop/windows/install/).

> Tested on Windows 10 with Node.js 16.15.1 and Docker 4.9.0.

Install Vue.js app dependencies then compile a production:

```bash
npm install
npm run build
```

## Run the Project (only have db as container)

Run MongoDB container with default user/password as ```root:example```:

```bash
docker pull mongo:latest
docker run --name mongo -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=example -d mongo
```

Create database, collections and product data (documents) in the MongoDB container:

```bash
node create_db.js
```

Startup the web server/REST services:

```bash
node server.js
```

The app will be served at ```http://localhost:3000```.

## Run the Project (both app and db as container)

The second way is to use Docker Compose to create two containers together:

```bash
docker-compose -p vue-ts-express -f docker-compose.yaml up -d
```

The MongoDB container will initialize the data with ```mongo-init.js```. The app will be served at ```http://localhost:8080```.

## Notes

* I only use the root user and expost localhost on both containers purely for convenience.
* Due to some reason, I cannot reproduce this on my Win 11 laptop with the exactly same Node.js/Docker environment - the MongoDB container is correctly built and initialized but the authentication via JavaScript always fail. Haven't yet figure out why.

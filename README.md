# A Vue.js Demo Web App with Express Backend Service and MongoDB - Full-Stack JavaScript

This is a simple shopping demo app, based on the [Vue 3](https://vuejs.org/) / [TypeScript](https://www.typescriptlang.org/) examples in [_Essential Typescript_](https://github.com/Apress/essential-typescript-4) by Adam Freeman, which use [Vue Router](https://router.vuejs.org/) for routing, [Vuex](https://vuex.vuejs.org/) for data store and Bootstrap 5 for CSS styles.

The difference are:

* Overhauled Optional API to the newer, more concise [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html) for all Vue.js components, including typed props and custom events. 
* Added a simple transition effect for switching product categories
* Added a _Clear Order_ button and some minor logic/style adjustment
* Use [Node.js](https://nodejs.org/en/) + [Express](https://expressjs.com/) as frontend server as well as the backend REST APIs
* Use [MongoDB](https://www.mongodb.com/) as database

![vue](https://user-images.githubusercontent.com/44191076/158605142-f6e01254-a794-4a09-9544-e9435a09e706.png)

## Run the Project

Install Node.js and [MongoDB Community Server](https://www.mongodb.com/try/download/community). You can install MongoDB Compass (db browser) in the process as well.

> Tested on Windows 10 with Node.js 16.14.1.

Run the following command from the project root directory to install NPM libraries:

```bash
npm install
```

Then create database, collections and product data (documents) in MongoDB:

```bash
node create_db.js
```

## Run the Project

There are two ways to run this project. First is to build a Vue.js production ans serve it via the Express server:

```bash
npm run build
node server.js
```

And open ```http://localhost:8080```.

If you wish to modify the Vue.js app on-the-go, you can run it on the dev server:

```bash
npm run serve
```

Then open another terminal and run

```bash
node server.js
```

To provide the backend services.

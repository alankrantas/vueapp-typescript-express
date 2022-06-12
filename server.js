/* 
 * Node.js + Express server and backend service
 */

const express = require("express");
const history = require("connect-history-api-fallback");
const bodyParser = require('body-parser');
const service = require('./service.js');

const app = express();

app.use("/", express.static("dist"));  // file server for the frontend
app.use("/api", service);  // REST APIs
app.use(history());  // fallback
app.use(bodyParser.json());  // JSON parser
app.use(bodyParser.urlencoded({ extended: true }));

const host = process.argv[2] || "localhost";
const port = process.argv[3] || 8080;

app.listen(
    port,
    host,
    () => console.log(`Server running on http://${host == "0.0.0.0" ? "localhost" : host}:${port} ...`)
);

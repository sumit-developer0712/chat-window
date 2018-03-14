const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const controllers = require('./controllers');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', controllers);

const server = http.createServer(app).listen(port);

module.exports = server;
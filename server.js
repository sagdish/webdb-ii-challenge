const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

// routes go here:

module.exports = server;
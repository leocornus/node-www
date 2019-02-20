// the very simple express server.

const express = require('express');
const serveIndex = require('serve-index');
const config = require('./config');

console.log(config);
const app = express();

//load static files.
app.use('/', express.static(config.documentRoot));
app.use('/', serveIndex(config.documentRoot));

// start server.
var server = app.listen(config.port, function() {
});

const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const routes = require('./routes/index');

const app = express();
app.use('/', routes);

module.exports = app;


var server = app.listen(PORT, function () {
	var port = server.address().port;
	console.log("App now running on port", port);
});
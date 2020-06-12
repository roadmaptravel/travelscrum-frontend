const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const routes = require('./routes/index');

const app = express();
app.use('/', routes);
app.use(express.static('public'));

app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'hbs')

module.exports = app;


var server = app.listen(PORT, function () {
	var port = server.address().port;
	console.log("App now running on port", port);
});
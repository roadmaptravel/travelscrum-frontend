const express = require('express');
const handlebars = require('express-handlebars');
var hbsHelpers = require('handlebars-helpers');


const path = require('path');
const PORT = process.env.PORT || 5000;
const routes = require('./routes/index');


const app = express();
app.use('/', routes);
app.use(express.static('public'));

app.engine('hbs', handlebars({
	extname: 'hbs',
	layoutsDir: __dirname + '/views/',
	partialsDir: __dirname + '/views/partials/',
	helpers: require('./helpers/handlebars-helpers')
}));
app.set('view engine', 'hbs');

module.exports = app;

var server = app.listen(PORT, function () {
	var port = server.address().port;
	console.log("App now running on port", port);
});
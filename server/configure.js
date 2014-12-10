var path = require('path'),
   	routes = require('./routes'),
   	exphbs = require('express3-handlebars'),
   	express = require('express'),
   	bodyParser = require('body-parser'),
   	morgan = require('morgan'),
   	methodOverride = require('method-override'),
   	cookieParser = require('cookie-parser'),
   	serveStatic = require('serve-static'),
   	errorHandler = require('errorHandler');

module.exports = function(app) {
	// configuration code...

	app.engine('handlebars', exphbs.create({
		defaultLayout: 'main',
		layoutsDir: app.get('views') + '/layouts',
		partialsDir: [app.get('views') + '/partials']
	}).engine);

	app.set('view engine', 'handlebars');

	app.use(morgan('dev'));

	app.use(bodyParser({
		uploadDir:path.join(__dirname, '../public/upload/temp')
	}));

	// app.use(bodyParser.json());
	// app.use(bodyParser.urlencoded({
	// 	extended: true
	// }));

	app.use(methodOverride());

	app.use(cookieParser('some-secret-value-here'));

	routes.initialize(app, new express.Router());

	app.use('/public/', express.static(path.join(__dirname, '../public')));

	if ('development' === app.get('env')) {
		app.use(errorHandler());
	}

	routes.initialize(app);

	return app;
}
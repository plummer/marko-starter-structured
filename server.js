require('marko/express');
require('marko/node-require');

const routes = require('./routes');
const lassoConfig = require('./lasso-config');

const express = require('express');
const isProduction = process.env.NODE_ENV === 'production';

// Configure lasso to control how JS/CSS/etc. is delivered to the browser
require('lasso').configure(lassoConfig.configuration(isProduction));

const app = express();

const port = process.env.PORT || 3000;

app.use(require('lasso/middleware').serveStatic());

app.use("/", routes);

if (process.send) {
	process.send('online');
}

app.listen(port);
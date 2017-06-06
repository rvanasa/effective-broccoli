var express = require('express');

module.exports = function(App, Config, Webpack)
{
	if(Config.resourcePath)
	{
		// Use compiled static resources (usually in production)
		App.use(express.static(Config.resourcePath));
	}
	else
	{
		// Use webpack-dev-middleware to dynamically serve static resources
		var devMiddleware = require('webpack-dev-middleware');
		
		App.use(devMiddleware(Webpack, {
			stats: {colors: true},
			inline: true,
			hot: true,
		}));
	}
}
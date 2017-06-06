var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ENV = process.env.npm_lifecycle_event;
var isBuild = ENV === 'build';

var srcPath = __dirname + '/www';
var destPath = __dirname + '/dist';

var config = {
	entry: {
		app: srcPath + '/app/main.js',
	},
	output: {
		path: destPath,
		publicPath: '/',
		filename: isBuild ? '[name].[hash].js' : '[name].bundle.js',
		chunkFilename: isBuild ? '[name].[hash].js' : '[name].bundle.js',
	},
	devtool: 'source-map',
	module: {
		loaders: [{
			test: /\.js$/,
			include: /www/,
			loader: 'babel',
			query: {
				presets: ['es2015'],
			},
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract('style', 'css?sourceMap'),
		}, {
			test: /\.html$/,
			loader: 'html',
		}, {
			test: /\.(png|jpg)$/,
			loader: 'file',
		}],
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
		}),
		new HtmlWebpackPlugin({
			template: srcPath + '/../www/index.ejs',
			inject: 'head',
		}),
		new ExtractTextPlugin('[name].[hash].css')
	],
};

module.exports = config;
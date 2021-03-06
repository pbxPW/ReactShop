var path = require('path');
var webpack = require('webpack');


module.exports = {
	entry: {
		main: './src/js/app.jsx'
	},
	output: {
		filename: './main.js'
	},
	module: {
		loaders: [{
			test: /\.(jsx)$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel',
			query: {
			presets: ['react', 'es2015']}
			}, {
            test: /\.(jpg|png|svg)$/,
            loader: 'url-loader',
            options: {
                limit: 25000,
            	},
        	},
			]
		},
	plugins: []
};


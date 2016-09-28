var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry : [
		'webpack/hot/dev-server', 
		'webpack-dev-server/client?http://localhost:8080', 
		path.resolve(__dirname, 'main.js')
	],
	output: {
		path : path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	plugins: [
    	new webpack.HotModuleReplacementPlugin()
    ]
}
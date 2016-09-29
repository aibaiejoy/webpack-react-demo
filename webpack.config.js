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
	/** 自动刷新，
		1. 需要配置此插件，
		2. 启动脚本也要加 --hot
		3. entry 配置
	*/
	plugins: [
    	new webpack.HotModuleReplacementPlugin()
    ], 
    /**
	 * 配置react，就需要配置module
     */
    module : {
    	loaders:[
    		{test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react'}
    	]
    }
}
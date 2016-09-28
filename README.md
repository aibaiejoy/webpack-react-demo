# webpack-react-demo


参考文件

https://fakefish.github.io/react-webpack-cookbook/Introduction-to-Webpack.html

这里的自动刷新写的有点问题，需要在webpack-config.js中配合插件

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
        ]
    }
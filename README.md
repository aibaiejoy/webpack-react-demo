# webpack-react-demo

参考文件
https://fakefish.github.io/react-webpack-cookbook/Introduction-to-Webpack.html

demo-1:实现以下功能

1. 配置了基本的webpack功能
2. 配置了依赖包，webpack，webpack-dev-server
3. 配置了自动刷新
4. 引用文件在这个阶段只能使用cmd模式，es6不支持，支持es6需要安装bebel;
 
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
                'webpack/hot/dev-server', 
                'webpack-dev-server/client?http://localhost:8080', 
        */
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    }

demo-2: 实现以下功能

实现两个js文件，使用cmd规范
入口文件main.js
组件文件component.js




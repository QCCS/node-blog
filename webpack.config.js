let externals = _externals();
const copyWebpackPlugin = require('copy-webpack-plugin');
let env = process.env.NODE_ENV || 'development';
console.log("打包环境："+env);
module.exports = {
    entry: __dirname + '/src/index.js',//入口文件
    output: {
        path: __dirname + '/dist',//打包后的文件位置
        filename: 'index.js'//打包后的文件
    },
    target: 'node',
    // devtool : "cheap-module-eval-source-map",
    // devtool : "hidden-source-map",
    devtool: "nosources-source-map",
    externals: externals,
    mode: env === "prod" ? "production" : "development",
    module: {
        rules: [
        ]
    },
    plugins: [
        new copyWebpackPlugin([{
            from:__dirname+'/src/static',//打包的静态资源目录地址
            to:'./static' //打包到dist下面的 static
        }]),
        new copyWebpackPlugin([{
            from:__dirname+'/src/views',//打包的模版资源目录地址
            to:'./views' //打包到dist下面的 views
        }]),
    ]
}
//外部依赖，不要打包进来
function _externals() {
    let manifest = require('./package.json');
    let dependencies = manifest.dependencies;
    let externals = {};
    for (let p in dependencies) {
        externals[p] = 'commonjs ' + p;
    }
    return externals;
}
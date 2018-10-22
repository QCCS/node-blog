/**
 * Created by zhouli on 18/9/22
 * 开发的时候，监听文件变化，重新打包
 */
var chokidar = require('chokidar');
var controllerScanner = require ('./src/utils/controllerScanner');
var serviceScanner = require ('./src/utils/serviceScanner');
//引入子进程模块，调用命令
var process = require('child_process');
chokidar.watch('./src',{ignored:[/controller\/index\.js/, /service\/index\.js/]}).on('change', (event, path) => {
    console.log("控制器扫描：");
    controllerScanner.init();
    console.log("service扫描：");
    serviceScanner.scanner.init("./src/service",'Service');
    console.log("重新打包：");
    process.exec('node_modules/.bin/webpack',function (error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        console.log(stdout);
        console.log(stderr);
    });
});
// chokidar.watch('./src/controller',{ignored: /index\.js/}).on('change', (event, path) => {
//     console.log("控制器扫描：");
//     controllerScanner.init();
// });

// 安装步骤
const fs = require('fs');
var exec = require('child_process').exec;
let args = process.argv.splice(2);
let commandName = args[0];
var data = fs.readFileSync('./settings/appSettings.js', 'utf8');
var conf = JSON.parse(data.split("default")[1]);
// 安装依赖
var init = 'npm i --no-package-lock';

// 建议先脚本创建数据库 sequelize创建数据库之后，需要修改字符集
var mysqlCreateProd = 'mysql -uroot -pmac123 -f -e "create database IF NOT EXISTS ' + conf.production.database + ' DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci"';
var mysqlCreateDev = 'mysql -uroot -pmac123 -f -e "create database IF NOT EXISTS ' + conf.development.database + ' DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci"';
var mysqlCreateTest = 'mysql -uroot -pmac123 -f -e "create database IF NOT EXISTS ' + conf.test.database + ' DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci"';
// mysql
// 直接导入sql逻辑备份文件
var mysqlSource = 'mysql -uroot -pmac123 -f -e "source src/database_name.sql"';

// dev 通过迁移文件 migrate
var sequlizeDevDB = 'node_modules/.bin/sequelize db:create';
var sequlizeDevTable = 'node_modules/.bin/sequelize db:migrate';
// test 通过迁移文件 migrate
var sequlizeTestDB = 'NODE_ENV=test node_modules/.bin/sequelize db:create';
var sequlizeTestTable = 'NODE_ENV=test node_modules/.bin/sequelize db:migrate';
// prod 通过迁移文件 migrate
var sequlizeProdDB = 'NODE_ENV=production node_modules/.bin/sequelize db:create';
var sequlizeProdTable = 'NODE_ENV=production node_modules/.bin/sequelize db:migrate';
// 填充数据
var seedDataDev = 'node_modules/.bin/sequelize db:seed:all';
var seedDataTest = 'NODE_ENV=test node_modules/.bin/sequelize db:seed:all';
var seedDataProd = 'NODE_ENV=production node_modules/.bin/sequelize db:seed:all';
/*
* 注意
* 1.只有对应的表创建了 migrate，运行命令才能创建表
* 2.migrate 只能创建表结构，数据库里面已有的数据不会创建
* */

// node
// dev 打包
var buildDev = 'npm run webpack';
var runDev = 'npm run dev';
// test 打包
var buildTest = 'npm run webpackTest';
var runTest = 'npm run devTest';
// prod 打包
var buildProd = 'npm run webpackProd';
var runProd = 'npm run superdev';


var commandJson = {
    help: "",
    initAll,
    init,
    mysqlCreateProd,
    mysqlCreateDev,
    mysqlCreateTest,
    mysqlSource,
    sequlizeDevDB,
    sequlizeDevTable,
    sequlizeTestDB,
    sequlizeTestTable,
    sequlizeProdDB,
    sequlizeProdTable,
    seedDataDev,
    seedDataTest,
    seedDataProd,
    buildDev,
    runDev,
    buildTest,
    runTest,
    buildProd,
    runProd,
}
var commandJsonExplain = {
    help: "显示帮助",
    initAll: "打包与数据库环境准备",
    init: "安装依赖",
    mysqlCreateProd: "shell创建Prod数据库",
    mysqlCreateTest: "shell创建dev数据库",
    mysqlCreateDev: "shell创建dev数据库",
    mysqlSource: "直接导入sql文件",
    sequlizeDevDB: "sequlize创建dev数据库",
    sequlizeDevTable: "sequlize创建dev数据表",
    sequlizeTestDB: "sequlize创建test数据库",
    sequlizeTestTable: "sequlize创建test数据表",
    sequlizeProdDB: "sequlize创建Prod数据库",
    sequlizeProdTable: "sequlize创建Prod数据表",
    seedDataDev: "dev填充数据",
    seedDataTest: "test填充数据",
    seedDataProd: "prod填充数据",
    buildDev: "打包开发环境",
    runDev: "打包开发环境",
    buildTest: "打包Test环境",
    runTest: "运行Test环境",
    buildProd: "打包Prod环境",
    runProd: "运行Prod环境",
}
function showTips() {
    console.log("找不到定义的命令，请从下面命令选择");
    for (let key in commandJson) {
        console.log(commandJsonExplain[key] + "，请运行：node install " + key);
    }
}
function runCommand(command) {
    var sh = commandJson[command];
    if (sh) {
        console.log("运行：" + commandJson[command]);
        //return refrence to the child process
        return exec(sh, function (err, stdout, stderr) {
            if (err) {
                console.log("err " + err);
                console.log("stderr " + stderr);
            }
            console.log(stdout);
        });
    } else {
        showTips();
    }
}

// 一键初始化项目准备数据库环境
function initAll(callback) {
    exec("node install init", function (err, stdout, stderr) {
        console.log(stdout);
        exec("node install buildProd", function (err, stdout, stderr) {
            console.log(stdout);
            exec("node install mysqlCreateProd", function (err, stdout, stderr) {
                console.log(stdout);
                exec("node install sequlizeProdTable", function (err, stdout, stderr) {
                    console.log(stdout);
                    exec("node install seedDataProd", function (err, stdout, stderr) {
                        console.log(stdout);
                        callback && callback();
                    });
                });
            });
        });
    });
}

//运行命令
if (commandName === "initAll") {
    initAll();
}
else if (commandName === "help") {
    console.log("请查看readme,或者docs目录下的文档");
    showTips();
}
else {
    runCommand(commandName);
}

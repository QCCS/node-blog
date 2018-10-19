// 安装步骤
const fs = require('fs');
var exec = require('child_process').exec;
let args = process.argv.splice(2);
let commandName = args[0];
var data = fs.readFileSync('./settings/appSettings.js', 'utf8');
var conf = JSON.parse(data.split("default")[1]);

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


var commandJson = {
    help: {
        desc: "显示帮助",
        com: "help"
    },
    initAll: {
        desc: "打包与数据库环境准备",
        com: initAll
    },
    init: {
        desc: "安装项目依赖",
        com: 'npm i --no-package-lock'
    },
    mysqlCreateProd: {
        desc: "shell创建Prod数据库",
        com: mysqlCreateProd
    },
    mysqlCreateDev: {
        desc: "shell创建dev数据库",
        com: mysqlCreateDev
    },
    mysqlCreateTest: {
        desc: "shell创建test数据库",
        com: mysqlCreateTest
    },
    mysqlSource: {
        desc: "直接导入sql文件",
        com: mysqlSource
    },
    sequlizeDevDB: {
        desc: "sequlize创建dev数据库",
        com: sequlizeDevDB
    },
    sequlizeDevTable: {
        desc: "sequlize创建dev数据表",
        com: sequlizeDevTable
    },
    sequlizeTestDB: {
        desc: "sequlize创建test数据库",
        com: sequlizeTestDB
    },
    sequlizeTestTable: {
        desc: "sequlize创建test数据表",
        com: sequlizeTestTable
    },
    sequlizeProdDB: {
        desc: "sequlize创建Prod数据库",
        com: sequlizeProdDB
    },
    sequlizeProdTable: {
        desc: "sequlize创建Prod数据表",
        com: sequlizeProdTable
    },
    seedDataDev: {
        desc: "dev填充数据",
        com: seedDataDev
    },
    seedDataTest: {
        desc: "test填充数据",
        com: seedDataTest
    },
    seedDataProd: {
        desc: "prod填充数据",
        com: seedDataProd
    },
    buildDev: {
        desc: "打包开发环境",
        com: 'npm run webpack'
    },
    runDev: {
        desc: "打包开发环境",
        com: 'npm run dev'
    },
    buildTest: {
        desc: "打包Test环境",
        com: 'npm run webpackTest'
    },
    runTest: {
        desc: "运行Test环境",
        com: 'npm run devTest'
    },
    buildProd: {
        desc: "打包Prod环境",
        com: 'npm run webpackProd'
    },
    runProd: {
        desc: "运行Prod环境",
        com: 'npm run superdev'
    },
    backup: {
        desc: "备份dev数据库",
        com: 'node backup-db.js'
    },
    backupTest: {
        desc: "备份test数据库",
        com: 'NODE_ENV=test node backup-db.js'
    },
    backupProd: {
        desc: "备份prod数据库",
        com: 'NODE_ENV=production node backup-db.js'
    },
}

function showTips() {
    console.log("找不到定义的命令，请从下面命令选择");
    console.log("------- node-blog-cli start -------");
    var i=0;
    for (let key in commandJson) {
        i++;
        if(i%2===0){
            //cyan
            console.log('\x1B[36m%s\x1B[0m:', commandJson[key].desc);
            console.log('\x1B[36m%s\x1B[0m', "node install " + key);
        }else {
            //yellow
            console.log('\x1B[33m%s\x1b[0m:', commandJson[key].desc);
            console.log('\x1B[33m%s\x1b[0m', "node install " + key);
        }

    }
    console.log("------- node-blog-cli end -------");
}

function runCommand(command) {
    var sh = commandJson[command];
    if (sh) {
        let com = commandJson[command].com;
        console.log(commandJson[command].desc);
        console.log("\n");
        console.log(commandJson[command].com);
        //执行命令
        exec(com, function (err, stdout, stderr) {
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

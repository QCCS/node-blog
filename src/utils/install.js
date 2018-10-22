// 安装步骤
const fs = require('fs');
const exec = require('child_process').exec;
var conf = getAppConfig("./settings/", "appSettings.js");
var commandJson = {
    help: {
        desc: "显示帮助",
        com: "help"
    },
    initAll: {
        desc: "生成环境：打包与数据库环境准备",
        com: initAll
    },
    test:{
        desc: "测试",
        com: 'npm run test'
    },
    nyc:{
        desc: "测试，显示报表",
        com: 'npm run nyc'
    },
    testReport:{
        desc: "生成html测试报表",
        com: 'npm run testReport'
    },
    init: {
        desc: "安装项目依赖",
        com: 'npm i --no-package-lock'
    },
    mysqlCreateProd: {
        desc: "推荐使用：shell创建Prod数据库",
        com: getMysqlCreateShell(conf.production)
    },
    mysqlCreateDev: {
        desc: "推荐使用：shell创建dev数据库",
        com: getMysqlCreateShell(conf.development)
    },
    mysqlCreateTest: {
        desc: "推荐使用：shell创建test数据库",
        com: getMysqlCreateShell(conf.test)
    },
    mysqlSource: {
        desc: "直接导入生产环境sql文件，sql文件放在项目跟目录",
        com: getMysqlImportShell(conf.production)
    },
    sequlizeDevDB: {
        desc: "不推荐使用：sequlize创建dev数据库",
        com: 'node_modules/.bin/sequelize db:create'
    },
    sequlizeDevTable: {
        desc: "sequlize创建dev数据表",
        com: 'node_modules/.bin/sequelize db:migrate'
    },
    sequlizeTestDB: {
        desc: "不推荐使用：sequlize创建test数据库",
        com: 'NODE_ENV=test node_modules/.bin/sequelize db:create'
    },
    sequlizeTestTable: {
        desc: "sequlize创建test数据表",
        com: 'NODE_ENV=test node_modules/.bin/sequelize db:migrate'
    },
    sequlizeProdDB: {
        desc: "不推荐使用：sequlize创建Prod数据库",
        com: 'NODE_ENV=production node_modules/.bin/sequelize db:create'
    },
    sequlizeProdTable: {
        desc: "sequlize创建Prod数据表",
        com: 'NODE_ENV=production node_modules/.bin/sequelize db:migrate'
    },
    seedDataDev: {
        desc: "dev填充数据",
        com: 'node_modules/.bin/sequelize db:seed:all'
    },
    seedDataTest: {
        desc: "test填充数据",
        com: 'NODE_ENV=test node_modules/.bin/sequelize db:seed:all'
    },
    seedDataProd: {
        desc: "prod填充数据",
        com: 'NODE_ENV=production node_modules/.bin/sequelize db:seed:all'
    },
    buildDev: {
        desc: "打包开发环境",
        com: 'npm run webpack'
    },
    runDev: {
        desc: "运行开发环境",
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
/*
* 注意
* 1.只有对应的表创建了 migrate，运行命令才能创建表
* 2.migrate 只能创建表结构，数据库里面已有的数据不会创建
* */

//获取输入命令
function getInputCommandName() {
    let args = process.argv.splice(2);
    let commandName = args[0];
    return commandName;
}

//获取项目配置
function getAppConfig(path, fileName) {
    var data = fs.readFileSync(path + fileName, 'utf8');
    var conf = JSON.parse(data.split("default")[1]);
    return conf;
}

//生成 mysql 数据库创建 shell
function getMysqlCreateShell(conf) {
    var mysqlCreate = 'create database IF NOT EXISTS ';
    var mysqlChar = ' DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci';
    return 'mysql -u' + conf.user + ' -p' + conf.password + ' -f -e "' + mysqlCreate + conf.database + mysqlChar + '"';
}

//生成导入数据库的shell
function getMysqlImportShell(conf) {
    return 'mysql -u' + conf.user + ' -p' + conf.password + ' -f -e "source ' + conf.database + '.sql"';
}

//命令提示
function showTips() {
    console.log("找不到定义的命令，请从下面命令选择");
    console.log("------- node-blog-cli start -------");
    var i = 0;
    for (let key in commandJson) {
        i++;
        if (i % 2 === 0) {
            //cyan
            console.log('\x1B[36m%s\x1B[0m:', commandJson[key].desc);
            console.log('\x1B[36m%s\x1B[0m', "node install " + key);
        } else {
            //yellow
            console.log('\x1B[33m%s\x1b[0m:', commandJson[key].desc);
            console.log('\x1B[33m%s\x1b[0m', "node install " + key);
        }

    }
    console.log("------- node-blog-cli end -------");
}

//运行命令
function runCommand(command) {
    var sh = commandJson[command];
    if (sh) {
        let com = commandJson[command].com;
        if(com.constructor.name==="Function"){
            commandJson[command].com()
        }else {
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
        }
    } else {
        showTips();
    }
}

// 一键初始化项目准备数据库环境
function initAll(callback) {
    console.log("一键初始化项目准备数据库环境");
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

//通过传入的参数运行运行指定命令
function initByArgs(commandName) {
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
}

exports.installCli = {
    commandJson,
    getInputCommandName,
    initByArgs
}
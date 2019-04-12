//备份数据
const fs = require('fs');
const dataConf = fs.readFileSync('./settings/appSettings.js', 'utf8');
const appSettings = JSON.parse(dataConf.split("default")[1]);
let databaseConf = appSettings.development;
let env = process.env.NODE_ENV || 'development';

if (env === "test") {
    databaseConf = appSettings.test;
}
if (env === "production") {
    databaseConf = appSettings.production;
}
console.log("备份数据库：" + databaseConf.database);
const Backup = require('mysql-backup-db');
const mysqlConf = {
    host: databaseConf.host,
    user: databaseConf.user,
    password: databaseConf.password,
    database: databaseConf.database,
    port: databaseConf.port,
    backupPath: "./src/backup-db/"
};
//30 分钟备份
let gapTime = 1000 * 60 * 30;
gapTime = 3000;
//最近3份
const count = 3;
Backup.backupWithGaptime(mysqlConf, gapTime, count);

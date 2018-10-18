//备份数据
const Backup = require('mysql-backup-db');
var config = {
    mysql: {
        host: '127.0.0.1',
        user: 'root',
        password: 'mac123',
        database: 'node_blog_dev',
        port: '3306',
        backupPath:"./src/backup-db/"
    }
};
mysqlConf = config.mysql;
//30分支备份
var gapTime = 1000*60*30;
gapTime = 3000;
//最近3份
var count = 3;
Backup.backupWithGaptime(mysqlConf,gapTime,count);

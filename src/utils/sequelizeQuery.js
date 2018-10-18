/**
 * Created by zhouli on 18/9/24
 * Sequelize数据库链接查询
 */
import Sequelize from 'sequelize';
import config from '../config/index';
let mysqlConf = config.mysql;
console.log("使用数据库 "+mysqlConf.database);
var sequelize = new Sequelize(mysqlConf.database, mysqlConf.user, mysqlConf.password, {
    host: mysqlConf.host,
    dialect: 'mysql',
    port: mysqlConf.port,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        charset: "utf8",
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    define: {
        underscored: true,
        charset: "utf8",
        dialectOptions: {
            collate: "utf8_general_ci",
        },
    }

});
let db = {
    sequelize,
    Sequelize,//挂载方便使用
}
export default db;
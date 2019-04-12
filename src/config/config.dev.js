/**
 * Created by zhouli on 18/9/24
 * 配置信息
 */
const fs = require('fs');
import appSetting from '../../settings/appSettings';
let data = fs.readFileSync('./settings/appSettings.js', 'utf8');
let conf = JSON.parse(data.split("default")[1]);
let config = {
    redis: conf.redis,
    port: appSetting.development.app_port,
    mysql: {
        host: appSetting.development.host,
        user: appSetting.development.user,
        password: appSetting.development.password,
        port: appSetting.development.port,
        database: appSetting.development.database,
    },
    secret:{
        sign:"secret"
    }
};
export default config;

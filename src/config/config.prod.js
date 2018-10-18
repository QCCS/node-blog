/**
 * Created by zhouli on 18/9/25
 * 配置信息
 */
import appSetting from '../../settings/appSettings';
let config = {
    port: appSetting.production.port,
    mysql: {
        host: '127.0.0.1',
        user: 'root',
        password: 'mac123',
        database: appSetting.production.database,
        port: '3306'
    },
    secret:{
        sign:"secret"
    }
};
export default config;
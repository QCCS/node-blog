/**
 * Created by zhouli on 18/9/25
 * 配置信息
 */
import appSetting from '../../settings/appSettings';
let config = {
    port: appSetting.production.app_port,
    mysql: {
        host: appSetting.production.host,
        user: appSetting.production.user,
        password: appSetting.production.password,
        port: appSetting.production.port,
        database: appSetting.production.database,
    },
    secret:{
        sign:"secret"
    }
};
export default config;
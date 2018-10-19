/**
 * Created by zhouli on 18/9/24
 * 配置信息
 */
import appSetting from '../../settings/appSettings';
let config = {
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
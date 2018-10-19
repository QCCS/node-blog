/**
 * Created by zhouli on 18/9/24
 * 配置信息
 */
import appSetting from '../../settings/appSettings';
let config = {
    port: appSetting.test.app_port,
    mysql: {
        host: appSetting.test.host,
        user: appSetting.test.user,
        password: appSetting.test.password,
        port: appSetting.test.port,
        database: appSetting.test.database,
    },
    secret:{
        sign:"secret"
    }
};
export default config;
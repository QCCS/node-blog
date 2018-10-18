/**
 * Created by zhouli on 2018/9/25.
 */
import configDev from './config.dev.js';
import configProd from './config.prod.js';

let env = process.env.NODE_ENV || 'development';
console.log("运行环境：" + env);
let conf = configDev;
if (env === "production" || env === "prod") {
    conf = configProd;
}
export default conf;
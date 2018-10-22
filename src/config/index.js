/**
 * Created by zhouli on 2018/9/25.
 */
import configDev from './config.dev.js';
import configProd from './config.prod.js';
import configTest from './config.test.js';

let env = process.env.NODE_ENV || 'development';
let conf = configDev;
if (env === "production") {
    conf = configProd;
    console.log("运行环境：production");

}
//env在打包之后无法传入，通过配置传入none代表测试环境
if(env === "none"){
    conf = configTest;
    console.log("运行环境：test");
}
console.log("运行环境：development");
export default conf;
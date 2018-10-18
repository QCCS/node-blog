import Koa from 'koa';
import Router from 'koa-router';
import staticServer from 'koa-static';
import bodyParser from 'koa-bodyparser';

//拦截校验token，解密token
import validateToken from './middleware/validateToken';
import logNote from './middleware/logNote';
import uploaderConfig from './middleware/uploaderConfig';
import errorDel from './middleware/errorDel';
import swaggerConfig from './middleware/swaggerConfig';
import koaJwtConfig from './middleware/koaJwtConfig';
import viewsConfig from './middleware/viewsConfig';

import indexController from './controller/index';
import config from './config/index';
import router from './route/router';
import postModuleRouter from './route/postModuleRouter';
// 路由实例
const routerForAllow = new Router();
// 创建服务实例
const app = new Koa();
// 使用babel编译之后，输出的是跟路径，/
console.log(__dirname);
// 输出绝对路径
console.log(process.cwd());
// 默认的静态文件
app.use(staticServer("." + __dirname + "dist/static"));
// 上传的图片
app.use(staticServer("." + __dirname + "publicImg"));
// 排除某些接口,不校验
app.use(koaJwtConfig());
// 上传图片
app.use(uploaderConfig());
// swagger 文档
app.use(swaggerConfig());
// token错误校验必须在 koaJwt 之后
app.use(validateToken());
// 模板引擎配置
app.use(viewsConfig());
// 日志处理
app.use(logNote());
// 请求体处理
app.use(bodyParser());
// 统一错误处理
app.on('error', errorDel());
// 使用路由中间件
app.use(indexController)
    .use(router.router.routes())
    .use(postModuleRouter.router.routes())
    .use(routerForAllow.allowedMethods());

//监听端口
app.listen(config.port);
console.log("监听端口：" + config.port);

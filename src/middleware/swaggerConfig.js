/**
 * Created by zhouli on 18/10/18
 */
import koaSwagger from 'koa2-swagger-ui';
export default function swaggerConfig() {
    let options = {
        routePrefix: '/swagger', // host at /swagger instead of default /docs
        swaggerOptions: {
            url: '/doc.json', // example path to json
            //json可以考虑模块导入，复用
        },
    }
    return koaSwagger(options);
}

/**
 * Created by zhouli on 18/10/18
 */
import koaJwt from 'koa-jwt';
import config from '../config/index';

export default function koaJwtConfig() {
    let path = [
        /^\/favicon*/,//favicon.ico,favicon-16*16.png等
        /^\/api\/blog/,//博客前台
        /^\/api\/login/,//登陆
        /^\/img/,//静态图片
        /^\/api\/upload/,//上传文件
        /^\/doc/,//文档忽略
        /^\/swagger/,//文档忽略
        /^\/api\/register///注册
    ]
    return koaJwt({
        secret: config.secret.sign,
    })
        .unless({
            path,
        });
}

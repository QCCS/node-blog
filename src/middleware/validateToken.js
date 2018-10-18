/**
 * Created by zhouli on 18/9/25
 */
import jwt from 'jsonwebtoken';
import config from '../config/index';
export default function validateToken() {
    return async function (ctx, next) {
        try {
            const token = ctx.header.authorization ; // 获取jwt
            console.log(token)
            if(token) {
                let payload;
                try {
                    let _userToken = token.split(" ")[1];//token中还有其他信息,Bearer
                    console.log(_userToken)
                    console.log("解码...")
                    payload = jwt.verify(_userToken, config.secret.sign);//解密userToken
                    console.log("解码结果")
                    console.log(payload)
                    ctx.user = {
                        id: payload.id
                    }
                } catch (err) {
                    console.log('不合法token: ', err)
                }
            }
            await next()
        } catch (err) {
            if (err.status === 401) {
                ctx.body = {
                    code: -1,
                    message: '认证失败'
                }
            } else {
                ctx.body = err;
            }
        }
    }
}

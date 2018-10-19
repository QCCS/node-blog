/**
 * Created by zhouli on 18/8/23
 */
import userService from '../service/user/userService';
import jwt from 'jsonwebtoken';
import config from '../config';

async function loginController(ctx) {
    let params = ctx.params;
    let data = ctx.request.body;
    let query = ctx.query;
    console.log("------");
    console.log(params);
    console.log(data);
    console.log(query);
    let res = await userService.getLoginUser(query.mobile, query.password);
    // 登录成功，签发token
    if(res.id){
        let userToken = res;
        let access_token = jwt.sign(userToken, config.secret.sign, {expiresIn: '1h'}) ;
        let refresh_token = jwt.sign(userToken, config.secret.sign, {expiresIn: '168h'}) ;
        res.data = {};
        res.data.access_token = access_token;
        res.data.refresh_token = refresh_token;
        //把这个token，加到登陆接口的响应体里面去
        ctx.body = res;
    }

}
export default loginController;

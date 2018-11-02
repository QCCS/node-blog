// 用户 curd
import jwt from 'jsonwebtoken';
//密码加密加盐
import bcrypt from 'bcryptjs';
import userService from '../../service/user/userService';
import accessTokenService from '../../service/accessToken/accessTokenService';
import refreshTokenService from '../../service/refreshToken/refreshTokenService';
import config from '../../config';
import consoleNote from '../../utils/consoleNote';
//todo
//需要是动态值 saltTimes
const saltTimes = 10;
async function loginController(ctx) {
    // let params = ctx.params;
    // let data = ctx.request.body;
    let query = ctx.query;
    //console.log("------");
    //console.log(params);
    //console.log(data);
    //console.log(query);
    consoleNote(query.password);
    consoleNote(query.mobile);
    consoleNote(userService);
    consoleNote(userService.getLoginUser);
    let res = await userService.getLoginUser(query.mobile);
    consoleNote(res);
    // 登录成功，签发token
    if(res.id && await bcrypt.compare(query.password, res.password)){
        let userToken = res;
        let access_token = jwt.sign(userToken, config.secret.sign, {expiresIn: '1h'}) ;
        let refresh_token = jwt.sign(userToken, config.secret.sign, {expiresIn: '168h'}) ;
        res.token = {};
        res.token.access_token = access_token;
        res.token.refresh_token = refresh_token;
        // todo
        // 存toten
        // user_id,
        //     access_token,
        //     client_id,
        //     expires

        let expiredTime = new Date((new Date().getTime())+60*60*1000);//1小时
        let expiredTimeR = new Date((new Date().getTime())+168*60*60*1000);//168小时
        let tokenRes = await accessTokenService.createAccessToken(res.id,access_token,'test',expiredTime);
        let refreshTokenRes = await refreshTokenService.createRefreshToken(res.id,refresh_token,'test',expiredTimeR);
        consoleNote(tokenRes);
        consoleNote(refreshTokenRes);
        //把这个token，加到登陆接口的响应体里面去
        delete res.password;
        ctx.body = res;
    }

}

async function createUser(ctx) {
    let data = ctx.request.body;
    let user = ctx.user;
    //密码加盐加密
    const salt = await bcrypt.genSalt(saltTimes);
    let password = await bcrypt.hash(data.password, salt);
    //console.log(user)
    let res = null;
    if(user){
        res = await userService.createUser(data.name, password,data.mobile,data.email,user.id);
    }else {
        res = await userService.createUser(data.name, password,data.mobile,data.email,1);
    }
    //密码不要加密与返回
    delete res.password;
    ctx.body = res;
    //console.log(res);
}

async function deleteUser(ctx) {
    let user = ctx.user;
    let b = await userService.deleteUser(user.id, ctx.params.id);
    ctx.body = b;
    //console.log(b);
}

async function updateUser(ctx) {
    let data = ctx.request.body;
    let user = await userService.updateUser(data.id, data.name);
    ctx.body = user;
    //console.log(user);
}

async function getUser(ctx) {
    let user = await userService.getUser(ctx.params.id);
    ctx.body = user;
    //console.log(user)
}

async function getAllUser(ctx) {
    let user = await userService.getAllUser();
    ctx.body = user;
    //console.log(user)
}

let userController = {
    loginController,
    createUser,
    deleteUser,
    updateUser,
    getUser,
    getAllUser
};
export default userController;

// 用户 curd
import jwt from 'jsonwebtoken';
//密码加密加盐
import bcrypt from 'bcryptjs';
import service from '../../service';
import config from '../../config';
import consoleNote from '../../utils/consoleNote';

const userService = service.userService.userService;
const accessTokenService = service.accessTokenService.accessTokenService;
const refreshTokenService = service.refreshTokenService.refreshTokenService;

//通过用户信息，获取token
async function getTokenByUserInfo(res) {
    consoleNote(res);
    //token有的信息
    let userToken = {
        id: res.id,
        name: res.name,
        email: res.email,
        mobile: res.mobile,
    };
    let access_token = jwt.sign(userToken, config.secret.sign, {expiresIn: '1h'});
    let refresh_token = jwt.sign(userToken, config.secret.sign, {expiresIn: '168h'});
    res.token = {};
    res.token.access_token = access_token;
    res.token.refresh_token = refresh_token;
    let expiredTime = new Date((new Date().getTime()) + 60 * 60 * 1000);//1小时
    let expiredTimeR = new Date((new Date().getTime()) + 168 * 60 * 60 * 1000);//168小时
    let tokenRes = await accessTokenService.createAccessToken(res.id, access_token, 'test', expiredTime);
    let refreshTokenRes = await refreshTokenService.createRefreshToken(res.id, refresh_token, 'test', expiredTimeR);
    //todo
    //通过 refresh_token 查询userid,userid获取用户信息，重新登录，删除原有token
    //把这个token，加到登陆接口的响应体里面去
    delete res.password;
    if (tokenRes && refreshTokenRes) {
        return res;
    } else {
        return {
            err: '登陆失败'
        };
    }
}

//todo
//需要是动态值 saltTimes
const saltTimes = 10;

//登录签发token
async function loginController(ctx) {
    // let params = ctx.params;
    // let data = ctx.request.body;
    let query = ctx.query;
    let res = await userService.getLoginUser(query.mobile);
    // 登录成功，签发token
    if (res.id && await bcrypt.compare(query.password, res.password)) {
        let userWithToken = await getTokenByUserInfo(res);
        consoleNote(userWithToken);
        ctx.body = userWithToken;
    }else {
        ctx.body = {info: '登录失败'};
    }
}

//刷新token
async function refreshController(ctx) {
    let data = ctx.request.body;
    let refresh_token = data.refresh_token;
    let payload;
    if (refresh_token) {
        payload = jwt.verify(refresh_token, config.secret.sign);//解密userToken
    }
    // 解码成功，删除已有token，重新签发token
    if (payload.id
        && await accessTokenService.deleteAccessToken(payload.id)
        && await refreshTokenService.deleteRefreshToken(payload.id)) {

        let userWithToken = await getTokenByUserInfo(payload);
        ctx.body = userWithToken;

    } else {
        ctx.body = {info: '认证失败'};
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
    if (user) {
        res = await userService.createUser(data.name, password, data.mobile, data.email, user.id);
    } else {
        res = await userService.createUser(data.name, password, data.mobile, data.email, 1);
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
    refreshController,
    createUser,
    deleteUser,
    updateUser,
    getUser,
    getAllUser
};
export default userController;

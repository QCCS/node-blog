// 用户 curd
import userService from '../../service/user/userService';

async function createUser(ctx) {
    let data = ctx.request.body;
    let user = ctx.user;
    console.log(user)
    let res = null;
    if(user){
        res = await userService.createUser(data.name, data.password,data.mobile,data.email,user.id);
    }else {
        res = await userService.createUser(data.name, data.password,data.mobile,data.email,1);
    }
    ctx.body = res;
    console.log(res);
}

async function deleteUser(ctx) {
    let user = ctx.user;
    let b = await userService.deleteUser(user.id, ctx.params.id);
    ctx.body = b;
    console.log(b);
}

async function updateUser(ctx) {
    let data = ctx.request.body;
    let user = await userService.updateUser(data.id, data.name);
    ctx.body = user;
    console.log(user);
}

async function getUser(ctx) {
    let user = await userService.getUser(ctx.params.id);
    ctx.body = user;
    console.log(user)
}

async function getAllUser(ctx) {
    let user = await userService.getAllUser();
    ctx.body = user;
    console.log(user)
}

let userController = {
    createUser,
    deleteUser,
    updateUser,
    getUser,
    getAllUser
}
export default userController;

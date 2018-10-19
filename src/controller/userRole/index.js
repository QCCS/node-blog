//userRole
//role userRole

import userRoleService from '../../service/userRole/userRoleService';

async function createUserRole(ctx) {
    let data = ctx.request.body;
    let user = ctx.user;
    let userRole = await userRoleService.createUserRole(user.id, data.name, data.post_id);
    ctx.body = userRole;
    console.log(userRole);
}

async function deleteUserRole(ctx) {
    let user = ctx.user;
    let b = await userRoleService.deleteUserRole(user.id, ctx.params.id);
    ctx.body = b;
    console.log(b);
}

async function updateUserRole(ctx) {
    let data = ctx.request.body;
    let user = ctx.user;
    let userRole = await userRoleService.updateUserRole(user.id, data.id, data.name);
    ctx.body = userRole;
    console.log(userRole);
}

async function getUserRole(ctx) {
    let userRole = await userRoleService.getUserRole(ctx.params.id);
    ctx.body = userRole;
    console.log(userRole)
}

async function getAllUserRole(ctx) {
    let userRole = await userRoleService.getAllUserRole();
    ctx.body = userRole;
    console.log(userRole)
}

let userRoleController = {
    createUserRole,
    deleteUserRole,
    updateUserRole,
    getUserRole,
    getAllUserRole
}
export default userRoleController;
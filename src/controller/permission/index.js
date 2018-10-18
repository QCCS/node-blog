// 权限 curd
import permissionService from '../../service/permission/permissionService';

async function createPermission(ctx) {
    let data = ctx.request.body;
    let user = ctx.user;
    let permission = await permissionService.createPermission(user.id, data.name, data.post_id);
    ctx.body = permission;
    console.log(permission);
}

async function deletePermission(ctx) {
    let user = ctx.user;
    let b = await permissionService.deletePermission(user.id, ctx.params.id);
    ctx.body = b;
    console.log(b);
}

async function updatePermission(ctx) {
    let data = ctx.request.body;
    let user = ctx.user;
    let permission = await permissionService.updatePermission(user.id, data.id, data.name);
    ctx.body = permission;
    console.log(permission);
}

async function getPermission(ctx) {
    let permission = await permissionService.getPermission(ctx.params.id);
    ctx.body = permission;
    console.log(permission)
}

async function getAllPermission(ctx) {
    let permission = await permissionService.getAllPermission();
    ctx.body = permission;
    console.log(permission)
}

let permissionController = {
    createPermission,
    deletePermission,
    updatePermission,
    getPermission,
    getAllPermission
}
export default permissionController;

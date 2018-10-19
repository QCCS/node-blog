//role rolePermission
import consoleNote from '../../utils/consoleNote';
import rolePermissionService from '../../service/rolePermission/rolePermissionService';

async function createRolePermission(ctx) {
    let data = ctx.request.body;
    let user = ctx.user;
    let rolePermission = null;
    try {
        rolePermission = await rolePermissionService.createRolePermission(user.id, data.role_id, data.permission_id);
        ctx.body = rolePermission;
    } catch (e){
        rolePermission = {
            err:"参数错误",
            body:["role_id","permission_id"],
        };
        consoleNote(e);
    } finally {
        ctx.body = rolePermission;
    }
}

async function deleteRolePermission(ctx) {
    let user = ctx.user;
    let b = await rolePermissionService.deleteRolePermission(user.id, ctx.params.id);
    ctx.body = b;
    console.log(b);
}

async function updateRolePermission(ctx) {
    let data = ctx.request.body;
    let user = ctx.user;
    let rolePermission = await rolePermissionService.updateRolePermission(user.id, data.role_id, data.permission_id);
    ctx.body = rolePermission;
    console.log(rolePermission);
}

async function getRolePermission(ctx) {
    let rolePermission = await rolePermissionService.getRolePermission(ctx.params.id);
    ctx.body = rolePermission;
    console.log(rolePermission)
}

async function getAllRolePermission(ctx) {
    let rolePermission = await rolePermissionService.getAllRolePermission();
    ctx.body = rolePermission;
    console.log(rolePermission)
}

let rolePermissionController = {
    createRolePermission,
    deleteRolePermission,
    updateRolePermission,
    getRolePermission,
    getAllRolePermission
}
export default rolePermissionController;

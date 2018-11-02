import service from '../../service';
const roleService = service.roleService.roleService;
async function createRole(ctx) {
    let data = ctx.request.body;
    let user = ctx.user;
    let role = await roleService.createRole(user.id, data.name);
    ctx.body = role;
    console.log(role);
}

async function deleteRole(ctx) {
    let user = ctx.user;
    let b = await roleService.deleteRole(user.id, ctx.params.id);
    ctx.body = b;
    console.log(b);
}

async function updateRole(ctx) {
    let data = ctx.request.body;
    let user = ctx.user;
    let role = await roleService.updateRole(user.id, data.id, data.name);
    ctx.body = role;
    console.log(role);
}

async function getRole(ctx) {
    let role = await roleService.getRole(ctx.params.id);
    ctx.body = role;
    console.log(role)
}

async function getAllRole(ctx) {
    let role = await roleService.getAllRole();
    ctx.body = role;
    console.log(role)
}

let roleController = {
    createRole,
    deleteRole,
    updateRole,
    getRole,
    getAllRole
}
export default roleController;

import rolePermission from '../../models/role_permission';
async function createRolePermission(user_id, role_id,permission_id) {
    let res = await rolePermission.create(
        {
            created_by:user_id,
            role_id,
            permission_id
        },

    );
    return res;
}

async function deleteRolePermission(user_id, id) {
    let res = await rolePermission.destroy({
        where: {
            id,
            user_id
        }
    });
    return res;
}

async function updateRolePermission(user_id, id, permission_id,role_id) {
    let res = await rolePermission.update(
        {
            user_id,
            permission_id,
            role_id
        },
        {
            where: {
                id
            }
        }
    );
    return res;
}

async function getRolePermission(id) {
    let res = await rolePermission.findById(id);
    return res;
}

async function getAllRolePermission() {
    let res = await rolePermission.findAll();
    return res;
}

let rolePermissionService = {
    createRolePermission,
    deleteRolePermission,
    updateRolePermission,
    getRolePermission,
    getAllRolePermission
}
export default rolePermissionService;
import rolePermission from '../../models/role_permission';

async function createRolePermission(user_id, role_id, permission_id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await rolePermission.create(
            {
                created_by: user_id,
                role_id,
                permission_id
            },
        );
    } catch (e) {
        // console.error(e)
    }
    return res;

}

async function deleteRolePermission(user_id, id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await rolePermission.destroy({
            where: {
                id,
                user_id
            }
        });
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function updateRolePermission(user_id, id, permission_id, role_id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await rolePermission.update(
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
    } catch (e) {
        // console.error(e)
    }
    return res;

}

async function getRolePermission(id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await rolePermission.findById(id);
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function getAllRolePermission() {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await rolePermission.findAll();
    } catch (e) {
        // console.error(e)
    }
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

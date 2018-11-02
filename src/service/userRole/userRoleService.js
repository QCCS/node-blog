import userRole from '../../models/user_role';
async function createUserRole(created_by,user_id, role_id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await userRole.create(
            {
                created_by,
                user_id,
                role_id
            },
        );
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function deleteUserRole(user_id, id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await userRole.destroy({
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

async function updateUserRole(user_id, id, role_id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await userRole.update(
            {
                user_id,
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

async function getUserRole(id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await userRole.findById(id);
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function getAllUserRole() {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await userRole.findAll();
    } catch (e) {
        // console.error(e)
    }
    return res;
}

let userRoleService = {
    createUserRole,
    deleteUserRole,
    updateUserRole,
    getUserRole,
    getAllUserRole
}
export default userRoleService;

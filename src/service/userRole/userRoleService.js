import userRole from '../../models/refresh_token';
async function createUserRole(user_id, role_id) {
    let res = await userRole.create(
        {
            user_id,
            role_id
        },

    );
    return res;
}

async function deleteUserRole(user_id, id) {
    let res = await userRole.destroy({
        where: {
            id,
            user_id
        }
    });
    return res;
}

async function updateUserRole(user_id, id, role_id) {
    let res = await userRole.update(
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
    return res;
}

async function getUserRole(id) {
    let res = await userRole.findById(id);
    return res;
}

async function getAllUserRole() {
    let res = await userRole.findAll();
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
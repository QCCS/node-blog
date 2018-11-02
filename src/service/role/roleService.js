import role from '../../models/role';
async function createRole(user_id, name) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await role.create({
            user_id,
            name
        });
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function deleteRole(id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await role.destroy({
            where: {
                id: id
            }
        });
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function updateRole(id, name) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await role.update({
            name: name
        }, {
            where: {
                id: id
            }
        });
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function getRole(id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await role.findById(id);
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function getAllRole() {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await role.findAll();
    } catch (e) {
        // console.error(e)
    }
    return res;

}

let roleService = {
    createRole,
    deleteRole,
    updateRole,
    getRole,
    getAllRole
};
export default roleService;

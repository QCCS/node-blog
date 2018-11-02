import permission from '../../models/permission';

async function createPermission(user_id, name) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await permission.create({
            user_id,
            name
        });
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function deletePermission(id) {
    // sql
    // let res = await sequelize.query('DELETE * FROM permission WHERE id = ?');
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await permission.destroy({
            where: {
                id: id
            }
        });
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function updatePermission(id, name) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await permission.update({
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

async function getPermission(id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await permission.findById(id);
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function getAllPermission() {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await permission.findAll();
    } catch (e) {
        // console.error(e)
    }
    return res;
}

let permissionService = {
    createPermission,
    deletePermission,
    updatePermission,
    getPermission,
    getAllPermission
}
export default permissionService;

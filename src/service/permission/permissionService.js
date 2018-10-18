import permission from '../../models/permission';

async function createPermission(id, name) {
    let res = await permission.create({
        id: id,
        name: name
    });
    return res;
}

async function deletePermission(id) {
    let res = await permission.destroy({
        where: {
            id: id
        }
    });
    // sql
    // let res = await sequelize.query('DELETE * FROM permission WHERE id = ?');
    return res;
}

async function updatePermission(id, name) {
    let res = await permission.update({
        name: name
    },{
        where: {
            id: id
        }
    });
    return res;
}

async function getPermission(id) {
    let res = await permission.findById(id);
    return res;
}

async function getAllPermission() {
    let res = await permission.findAll();
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
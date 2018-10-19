import role from '../../models/role';
async function createRole(user_id, name) {
    let res = await role.create({
        user_id,
        name
    });
    return res;
}

async function deleteRole(id) {
    let res = await role.destroy({
        where: {
            id: id
        }
    });
    // sql
    // let res = await sequelize.query('DELETE * FROM role WHERE id = ?');
    return res;
}

async function updateRole(id, name) {
    let res = await role.update({
        name: name
    },{
        where: {
            id: id
        }
    });
    return res;
}

async function getRole(id) {
    let res = await role.findById(id);
    return res;
}

async function getAllRole() {
    let res = await role.findAll();
    return res;
}

let roleService = {
    createRole,
    deleteRole,
    updateRole,
    getRole,
    getAllRole
}
export default roleService;
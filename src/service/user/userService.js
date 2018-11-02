import user from '../../models/user';
import db from '../../utils/sequelizeQuery';
import consoleNote from '../../utils/consoleNote';
async function createUser(name, password, mobile, email,created_by) {
    let res = await user.create({
        name,
        password,
        mobile,
        email,
        created_by,
        status:0
    });
    return res;

}

async function deleteUser(user_id, id) {
    return await user.destroy({
        where: {
            id,
            user_id
        }
    });
    // sql
    // let res = await sequelize.query('DELETE * FROM user WHERE id = ?');
}

async function updateUser(id, name) {
    let res = await user.update(
        {
            name: name
        },
        {
            where: {
                id
            }
        }
    );
    return res;
}

async function getLoginUser(mobile) {
    //返回出去，需要与密码校验，密码加密了
    let res = await db.sequelize.query('select * from user where mobile = ?',
        { replacements: [mobile], type: db.sequelize.QueryTypes.SELECT });
    return res[0];
}
async function getUser(id) {
    let res = await user.findById(id);
    return res;
}
async function getAllUser() {
    let res = await user.findAll();
    return res;
}

let userService = {
    createUser,
    deleteUser,
    updateUser,
    getUser,
    getLoginUser,
    getAllUser
};
export default userService;

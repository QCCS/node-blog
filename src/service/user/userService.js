import user from '../../models/user';
import db from '../../utils/sequelizeQuery';

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
    let res = await user.destroy({
        where: {
            id,
            user_id
        }
    });
    // sql
    // let res = await sequelize.query('DELETE * FROM user WHERE id = ?');
    return res;
}

async function updateUser(user_id, id, name) {
    let res = await user.update(
        {
            name: name
        },
        {
            where: {
                user_id,
                id
            }
        }
    );
    return res;
}

async function getLoginUser(mobile,password) {
    let res = await db.sequelize.query('select * from user where mobile = ? and password = ?',
        { replacements: [mobile,password], type: db.sequelize.QueryTypes.SELECT });
    //密码不要加密与返回
    delete res[0].password;
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
}
export default userService;
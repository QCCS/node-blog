import user from '../../models/user';
import db from '../../utils/sequelizeQuery';
import consoleNote from '../../utils/consoleNote';

async function createUser(name, password, mobile, email, created_by) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await user.create({
            name,
            password,
            mobile,
            email,
            created_by,
            status: 0
        });
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function deleteUser(user_id, id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await user.destroy({
            where: {
                id,
                user_id
            }
        });
    } catch (e) {
        // console.error(e)
    }
    return res;
    // sql
    // let res = await sequelize.query('DELETE * FROM user WHERE id = ?');
}

async function updateUser(id, name) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await user.update(
            {
                name: name
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

async function getLoginUser(mobile) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        //返回出去，需要与密码校验，密码加密了
        let _res = await db.sequelize.query('select * from user where mobile = ?',
            {replacements: [mobile], type: db.sequelize.QueryTypes.SELECT});
        res = _res[0];
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function getUser(id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await user.findById(id);
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function getAllUser() {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await user.findAll();
    } catch (e) {
        // console.error(e)
    }
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

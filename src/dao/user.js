/**
 * Created by zhouli on 18/9/24
 */
/*
* 用户
* 电话
* 密码
* 邮箱
* */
import query from '../utils/query';

const sql = {
    login: `
    SELECT password, id
    FROM user
    WHERE mobile=?
  `,
    register: `
    INSERT INTO user(id,name,password,mobile,email)
      VALUES(?, ?, ?, ?, ?)
  `,
    edit: `
    UPDATE user SET name=?, password=?,mobile=?,email=?
    WHERE id=?
  `
};

//登陆
async function loginDao(phone, password) {
    return await query(sql.login, [phone, password]);
}
//注册
async function registerDao(id, name, password, phone,email) {
    return await query(sql.register, [id, name, password, phone,email]);
}
//修改
async function editDao(name, password, phone, email,userId) {
    return await query(sql.edit, [name, password, phone, email,userId]);
}
let userDao = {
    registerDao,
    loginDao,
    editDao
};
export default userDao;

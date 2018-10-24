/**
 * Created by zhouli on 18/9/24
 * 这是原生js写法，现在用 sequlize model 代替
 */
import userDao from '../../dao/user';
const loginDao = userDao.loginDao;
/*
  @code
  1:  判断失败
  2:  用户不存在
  3： 用户密码错误
 */
async function loginService(mobile, password) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        let user = await loginDao(mobile, password);
        if (user.length === 0) {
            res = {
                status: 1,
                message: 'FAILURE',
                code: 2
            };
        } else {
            if (password === user[0].password) {
                res = {
                    status: 0,
                    message: 'SUCCESS',
                    data: {
                        id: user[0].id
                    }
                };
            } else {
                res = {
                    status: 1,
                    message: 'FAILURE',
                    code: 3
                };
            }
        }
    } catch (e) {
        // console.error(e)
    }
    // console.log(res);
    return res;
}

export default loginService;

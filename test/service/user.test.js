/**
 * Created by zhouli on 2018/10/24.
 */
/**
 * Created by zhouli on 18/10/22
 */
import test from 'ava';
import service from '../../src/service';

let user = service.userService.userService;
test(' insert user', async t => {
    let name = "testName" + parseInt(Math.random() * 100000);
    let mobile = "" + parseInt(Math.random() * 100000000);
    const res = await user.createUser(name, "mac123", mobile,
        "123456789@qq.com", null);
    t.is(res.name, name);
    t.is(res.password, "mac123");

});
test('userService getAllUser', async t => {
    const users = await user.getAllUser();
    t.is(users[0].id, 1);
});
test('userService getUser', async t => {
    const users = await user.getUser(1);
    t.is(users.id, 1);
});
test('userService updateUser', async t => {
    let nameRe = "testNameRe" + parseInt(Math.random() * 100000);
    const users = await user.getUser(1);
    const resRe = await user.updateUser(users.id,nameRe);
    t.is(resRe[0], 1);
});

test('userService getLoginUser', async t => {
    const users = await user.getUser(1);
    const res = await user.getLoginUser(users.mobile,users.password);
    t.is(res.mobile, users.mobile);
});

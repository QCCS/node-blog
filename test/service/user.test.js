/**
 * Created by zhouli on 2018/10/24.
 */
import test from 'ava';
import service from '../../src/service';

let user = service.userService.userService;
test(' insert user', async t => {
    let name = "testName" + parseInt(Math.random() * 100000);
    let mobile = "" + parseInt(Math.random() * 100000000);
    let password = "$2a$10$DIK0r9W.4ihVjVJLQAIN2OH7Fj/v0r47yKmfxDts/WaWHMvwi5Mni";
    const res = await user.createUser(name, password, mobile,
        "123456789@qq.com", null);
    t.is(res.name, name);
    t.is(res.password, password);

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
    const res = await user.getLoginUser(users.mobile);
    t.is(res.mobile, users.mobile);
});

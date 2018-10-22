/**
 * Created by zhouli on 18/10/22
 */
import test from 'ava';
import userService from '../../src/service/user/userService';
test('userService 测试', async t => {
    const users = await userService.getAllUser();
    t.is(users[0].id, 1);
});


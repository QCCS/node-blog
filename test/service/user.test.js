/**
 * Created by zhouli on 2018/10/24.
 */
/**
 * Created by zhouli on 18/10/22
 */
import test from 'ava';
import service from '../../src/service';
let user = service.userService.userService;
test('userService getAllUser', async t => {
    const users = await user.getAllUser();
    t.is(users[0].id, 1);
});


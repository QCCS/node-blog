/**
 * Created by zhouli on 2018/10/24.
 */
/**
 * Created by zhouli on 18/10/22
 */
import test from 'ava';
import service from '../../src/service';
let token = service.accessTokenService.accessTokenService;
test('tokenService insert token', async t => {
    const tokens = await token.createAccessToken(1,"token",11233,new Date());
    t.is(tokens.user_id, 1);
});
test('tokenService getAlltoken', async t => {
    const tokens = await token.getAllAccessToken();
    t.is(tokens[0].id, 1);
});


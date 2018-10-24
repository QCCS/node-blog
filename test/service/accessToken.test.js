/**
 * Created by zhouli on 2018/10/24.
 */
import test from 'ava';
import service from '../../src/service';
const token = service.accessTokenService.accessTokenService;
test('tokenService insert token', async t => {
    const tokens = await token.createAccessToken(1,"token",11233,new Date());
    t.is(tokens.access_token, "token");
});
//跑完了上面的测试，再跑这个
test.after('cleanup', async t => {
    const tokens = await token.getAllAccessToken();
    t.is(tokens[0].id, 1);
});




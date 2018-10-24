/**
 * Created by zhouli on 2018/10/24.
 */
import test from 'ava';
import service from '../../src/service';
const token = service.refreshTokenService.refreshTokenService;
test('tokenService insert token', async t => {
    const tokens = await token.createRefreshToken(1,"refresh_token",11233,new Date());
    t.is(tokens.refresh_token, "refresh_token");
});
//跑完了上面的测试，再跑这个
test.after('cleanup', async t => {
    const tokens = await token.getAllRefreshToken();
    t.is(tokens[0].id, 1);
});

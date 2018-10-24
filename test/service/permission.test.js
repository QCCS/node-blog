/**
 * Created by zhouli on 2018/10/24.
 */
import test from 'ava';
import service from '../../src/service';
const permission = service.permissionService.permissionService;
test(' insert permission', async t => {
    const res = await permission.createPermission(1,"admin");
    t.is(res.name, "admin");
});
//跑完了上面的测试，再跑这个
test.after('cleanup', async t => {
    const res = await permission.getAllPermission();
    t.is(res[0].id, 1);
});




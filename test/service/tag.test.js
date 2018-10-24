/**
 * Created by zhouli on 2018/10/24.
 */
import test from 'ava';
import service from '../../src/service';
const tag = service.tagService.tagService;
test(' insert tag', async t => {
    const res = await tag.createTag(1,"tag");
    t.is(res.res.tag, "tag");
});
//跑完了上面的测试，再跑这个
test.after('cleanup', async t => {
    const res = await tag.getAllTag();
    t.is(res[0].id, 1);
});




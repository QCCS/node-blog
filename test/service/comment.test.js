/**
 * Created by zhouli on 2018/10/24.
 */
import test from 'ava';
import service from '../../src/service';
const comment = service.commentService.commentService;
test(' insert comment', async t => {
    const res = await comment.createComment(1,"comment");
    t.is(res.comment, "comment");
});
//跑完了上面的测试，再跑这个
test.after('cleanup', async t => {
    const res = await comment.getAllComment();
    t.is(res[0].id, 1);
});




/**
 * Created by zhouli on 2018/10/24.
 */
import test from 'ava';
import service from '../../src/service';
const post = service.postService.postService;
test(' insert post', async t => {
    const res = await post.createPost(1,"post_title",
        "desc","content",0,0);
    t.is(res.title, "post_title");
});
//跑完了上面的测试，再跑这个
test.after('cleanup', async t => {
    const res = await post.getAllPost();
    t.is(res[0].id, 1);
});




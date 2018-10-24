/**
 * Created by zhouli on 2018/10/24.
 */
import test from 'ava';
import service from '../../src/service';
const image = service.imageService.imageService;
test(' insert image', async t => {
    const res = await image.createImage(1,"img_title",
        "/imgs/p.png",1111);
    t.is(res.path, "/imgs/p.png");
});
//跑完了上面的测试，再跑这个
test.after('cleanup', async t => {
    const res = await image.getAllImage();
    t.is(res[0].id, 1);
});




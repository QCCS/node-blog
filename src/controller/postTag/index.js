import consoleNote from '../../utils/consoleNote';
import service from '../../service';
const postTagService = service.postTagService;
async function createPostTag(ctx) {
    let data = ctx.request.body;
    console.log(data);
    //事务
    //需要插入 post_postTag
    let postTag = null;
    try {
        postTag = await postTagService.createPostTag(data.post_id,data.tag_id);
        ctx.body = postTag;
    } catch (e){
        postTag = {
            err:"参数错误",
            body:["post_id","tag_id"],
        };
        consoleNote(e);
    } finally {
        ctx.body = postTag;
    }

}
async function deletePostTag(ctx) {
    let b = await postTagService.deletePostTag(ctx.params.id);
    ctx.body = b;
    console.log(b);
}
async function getPostTag(ctx) {
    let postTag = await postTagService.getPostTag(ctx.params.id);
    ctx.body = postTag;
    console.log(postTag)
}
async function getAllPostTag(ctx) {
    let postTag = await postTagService.getAllPostTag();
    ctx.body = postTag;
    console.log(postTag)
}

let postTagController = {
    createPostTag,
    deletePostTag,
    getPostTag,
    getAllPostTag
}
export default postTagController;

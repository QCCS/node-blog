import postTagService from '../../service/postTag/postTagService';
async function createPostTag(ctx) {
    let data = ctx.request.body;
    console.log(data);
    //事务
    //需要插入 post_postTag
    let postTag = await postTagService.createPostTag(data.post_id,data.tag_id);
    ctx.body = postTag;
    console.log(postTag);
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

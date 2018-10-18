import postLikeService from '../../service/postLike/postLikeService';
async function createPostLike(ctx) {
    let data = ctx.request.body;
    console.log(data);
    let user = ctx.user;
    //事务
    //需要插入 post_postLike
    let postLike = await postLikeService.createPostLike(user.id,data.post_id);
    ctx.body = postLike;
    console.log(postLike);
}
async function deletePostLike(ctx) {
    let user = ctx.user;
    let b = await postLikeService.deletePostLike(user.id,ctx.params.id);
    ctx.body = b;
    console.log(b);
}
async function getPostLike(ctx) {
    let postLike = await postLikeService.getPostLike(ctx.params.id);
    ctx.body = postLike;
    console.log(postLike)
}
async function getAllPostLike(ctx) {
    let postLike = await postLikeService.getAllPostLike();
    ctx.body = postLike;
    console.log(postLike)
}

let postLikeController = {
    createPostLike,
    deletePostLike,
    getPostLike,
    getAllPostLike
}
export default postLikeController;

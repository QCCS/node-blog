import postCommentService from '../../service/postComment/postCommentService';
async function createPostComment(ctx) {
    let data = ctx.request.body;
    //事务
    //需要插入 post_postComment
    let postComment = await postCommentService.createPostComment(data.post_id,data.comment_id);
    ctx.body = postComment;
    console.log(postComment);
}
async function deletePostComment(ctx) {
    let b = await postCommentService.deletePostComment(ctx.params.id);
    ctx.body = b;
    console.log(b);
}
async function getPostComment(ctx) {
    let postComment = await postCommentService.getPostComment(ctx.params.id);
    ctx.body = postComment;
    console.log(postComment)
}
async function getAllPostComment(ctx) {
    let postComment = await postCommentService.getAllPostComment();
    ctx.body = postComment;
    console.log(postComment)
}

let postCommentController = {
    createPostComment,
    deletePostComment,
    getPostComment,
    getAllPostComment
}
export default postCommentController;

import consoleNote from '../../utils/consoleNote';
import service from '../../service';
const postCommentService = service.postCommentService;
async function createPostComment(ctx) {
    let data = ctx.request.body;
    //事务
    //需要插入 post_postComment
    let postComment = null;
    try {
        postComment = await postCommentService.createPostComment(data.post_id,data.comment_id);
        ctx.body = postComment;
    } catch (e){
        postComment = {
            err:"参数错误",
            body:["post_id","comment_id"],
        };
        consoleNote(e);
    } finally {
        ctx.body = postComment;
    }
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

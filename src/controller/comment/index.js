// 评论 curd
import commentService from '../../service/comment/commentService';
import postCommentService from '../../service/postComment/postCommentService';
import db from '../../utils/sequelizeQuery';

async function createComment(ctx) {
    let data = ctx.request.body;
    let user = ctx.user;
    //事务
    //需要插入 post_comment
    let comment = await commentService.createComment(user.id, data.comment, data.post_id);
    ctx.body = comment;
}

async function deleteComment(ctx) {
    let user = ctx.user;
    let b = await commentService.deleteComment(ctx.params.id, user.id);
    if (user.root) {
        b = await commentService.deleteCommentByRoot(ctx.params.id);
    }
    ctx.body = b;
    console.log(b);
}

async function updateComment(ctx) {
    let data = ctx.request.body;
    let user = ctx.user;
    let comment = await commentService.updateComment(data.id, user.id, data.comment);
    if (user.root) {
        //如果是超级管理员
        comment = await commentService.updateCommentByRoot(ctx.params.id, data.comment);
    }
    ctx.body = comment;
    console.log(comment);
}

async function getComment(ctx) {
    let comment = await commentService.getComment(ctx.params.id);
    ctx.body = comment;
    console.log(comment)
}

async function getAllComment(ctx) {
    let comment = await commentService.getAllComment();
    ctx.body = comment;
    console.log(comment)
}

let commentController = {
    createComment,
    deleteComment,
    updateComment,
    getComment,
    getAllComment
};
export default commentController;

import comment from '../../models/comment';
import db from '../../utils/sequelizeQuery';
import postComment from '../../models/post_comment';

async function createComment(user_id, content, post_id) {
    let res = null;
    let pc = null;
    if (post_id) {
        // 创建事务
        return db.sequelize.transaction(async function (t) {
            // 在事务中执行操作
            res = await comment.create(
                {
                    user_id,
                    comment: content
                },
                {transaction: t}
            );
            pc = await postComment.create(
                {
                    post_id,
                    comment_id: res.id
                },
                {
                    transaction: t
                }
            );
            // 事务回滚
            // pc = await postComment.create(
            //     {},
            //     {
            //         transaction: t
            //     }
            // );
            // 返回给成功的回调
            return {
                res,
                pc
            }
        }).then(function (results) {
            /* 操作成功，事务会自动提交 */
            //返回到控制器
            return results;
        }).catch(function (err) {
            /* 操作失败，事件会自动回滚 */
            return err;
        });
    } else {
        res = await comment.create({
            user_id,
            comment: content
        });
        return res;
    }

}

async function deleteCommentByRoot(id) {
    let res = await comment.destroy({
        where: {
            id,
        }
    });
    return res;
}

async function deleteComment(id, user_id) {
    let res = await comment.destroy({
        where: {
            id,
            user_id,
        }
    });
    // sql
    // let res = await sequelize.query('DELETE * FROM permission WHERE id = ?');
    return res;
}

async function updateCommentByRoot(id, content) {
    let res = await comment.update(
        {
            comment: content
        },
        {
            where: {
                id,
            }
        }
    );
    return res;
}

async function updateComment(id, user_id, content) {
    let res = await comment.update(
        {
            comment: content
        },
        {
            where: {
                id,
                user_id
            }
        }
    );
    return res;
}

async function getComment(id) {
    let res = await comment.findById(id);
    return res;
}

async function getAllComment() {
    let res = await comment.findAll();
    return res;
}

let commentService = {
    createComment,
    deleteComment,
    deleteCommentByRoot,
    updateComment,
    updateCommentByRoot,
    getComment,
    getAllComment
}
export default commentService;
import postComment from '../../models/post_comment';
import db from '../../utils/sequelizeQuery';
async function createPostComment(post_id, comment_id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await postComment.create({
            post_id,
            comment_id
        });
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function deletePostComment(id) {
    // sql
    // let res = await sequelize.query('DELETE * FROM postComment WHERE id = ?');
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await postComment.destroy({
            where: {
                id: id
            }
        });
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function getPostComment(id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await postComment.findById(id);
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function getAllPostComment() {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await postComment.findAll();
    } catch (e) {
        // console.error(e)
    }
    return res;
}
async function getCommentByPostId(post_id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await db.sequelize.query('select p.id,c.comment from post p,comment c,post_comment pc ' +
            'where p.id = ? and pc.post_id=p.id and pc.comment_id=c.id',
            { replacements: [post_id], type: db.sequelize.QueryTypes.SELECT });
    } catch (e) {
        // console.error(e)
    }
    return res;

    // let res = await postComment.findAll({
    //     where: {
    //         post_id
    //     }
    // });
    // return res;
}

let postCommentService = {
    createPostComment,
    deletePostComment,
    getPostComment,
    getAllPostComment,
    getCommentByPostId
}
export default postCommentService;

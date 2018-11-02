import postLike from '../../models/post_like';

async function createPostLike(user_id, post_id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await postLike.create({
            user_id,
            post_id
        });
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function deletePostLike(user_id, id) {
    // sql
    // let res = await sequelize.query('DELETE * FROM postLike WHERE id = ?');
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await postLike.destroy({
            where: {
                user_id,
                id: id
            }
        });
    } catch (e) {
        // console.error(e)
    }
    return res;
}


async function getPostLike(id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await postLike.findById(id);
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function getAllPostLike() {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await postLike.findAll();
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function getLikeByPostId(post_id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await postLike.findAll({
            where: {
                post_id
            }
        });
    } catch (e) {
        // console.error(e)
    }
    return res;
}

let postLikeService = {
    createPostLike,
    deletePostLike,
    getPostLike,
    getAllPostLike,
    getLikeByPostId
}
export default postLikeService;

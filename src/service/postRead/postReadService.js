import postRead from '../../models/post_read';

async function createPostRead(user_id, post_id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await postRead.create({
            post_id,
            user_id
        });
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function deletePostRead(user_id, id) {
    // sql
    // let res = await sequelize.query('DELETE * FROM postRead WHERE id = ?');
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await postRead.destroy({
            where: {
                user_id,
                id
            }
        });
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function getPostRead(id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await postRead.findById(id);
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function getAllPostRead() {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await postRead.findAll();
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function getReadByPostId(post_id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await postRead.findAll({
            where: {
                post_id
            }
        });
    } catch (e) {
        // console.error(e)
    }
    return res;
}

let postReadService = {
    createPostRead,
    deletePostRead,
    getPostRead,
    getAllPostRead,
    getReadByPostId
}
export default postReadService;

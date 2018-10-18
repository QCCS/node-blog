import postRead from '../../models/post_read';

async function createPostRead(user_id, post_id) {
    let res = await postRead.create({
        post_id,
        user_id
    });
    return res;
}

async function deletePostRead(user_id, id) {
    let res = await postRead.destroy({
        where: {
            user_id,
            id
        }
    });
    // sql
    // let res = await sequelize.query('DELETE * FROM postRead WHERE id = ?');
    return res;
}

async function getPostRead(id) {
    let res = await postRead.findById(id);
    return res;
}

async function getAllPostRead() {
    let res = await postRead.findAll();
    return res;
}
async function getReadByPostId(post_id) {
    let res = await postRead.findAll({
        where: {
            post_id
        }
    });
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
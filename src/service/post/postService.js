import post from '../../models/post';

async function createPost(user_id, title, desc, content, md_content,is_delete, is_draft) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await post.create({
            user_id,
            title,
            desc,
            content,
            md_content,
            is_delete,
            is_draft,
        });
    } catch (e) {
        // console.error(e)
    }
    return res;
}
async function deletePost(user_id, id) {
    // sql
    // let res = await sequelize.query('DELETE * FROM post WHERE id = ?');
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res =await post.destroy({
            where: {
                id,
                user_id
            }
        });
    } catch (e) {
        // console.error(e)
    }
    return res;
}
async function updatePost(user_id, id, title, desc, content, is_delete, is_draft) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await post.update(
            {
                title,
                desc,
                content,
                is_delete,
                is_draft,
            },
            {
                where: {
                    user_id,
                    id
                }
            }
        );
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function getPost(id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await post.findById(id);
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function getAllPost() {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await post.findAll();
    } catch (e) {
        // console.error(e)
    }
    return res;
}

let postService = {
    createPost,
    deletePost,
    updatePost,
    getPost,
    getAllPost
};
export default postService;

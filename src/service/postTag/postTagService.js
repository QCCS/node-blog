import postTag from '../../models/post_tag';
import db from '../../utils/sequelizeQuery';

async function createPostTag(post_id, tag_id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await postTag.create({
            post_id,
            tag_id
        });
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function deletePostTag(id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await postTag.destroy({
            where: {
                id: id
            }
        });
    } catch (e) {
        // console.error(e)
    }
    return res;
}



async function getPostTag(id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await postTag.findById(id);
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function getAllPostTag() {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await postTag.findAll();
    } catch (e) {
        // console.error(e)
    }
    return res;

}
async function getTagByPostId(post_id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await db.sequelize.query('select p.id,t.tag from post p,tag t,post_tag pt where p.id='+post_id+' and pt.post_id=p.id and pt.tag_id=t.id',
            { replacements: [post_id], type: db.sequelize.QueryTypes.SELECT });
    } catch (e) {
        // console.error(e)
    }
    return res;
    // let res = await postTag.findAll({
    //     where: {
    //         post_id
    //     }
    // });
    // return res;
}

let postTagService = {
    createPostTag,
    deletePostTag,
    getPostTag,
    getAllPostTag,
    getTagByPostId
}
export default postTagService;

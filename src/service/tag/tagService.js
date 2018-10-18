import tag from '../../models/tag';
import db from '../../utils/sequelizeQuery';
import postTag from '../../models/post_tag';
async function createTag(user_id, tag_name, post_id) {
    let res = null;
    let pt = null;
    // 创建事务
    // 情况1：只创建标签
    // 情况2：在博客上添加标签
    return db.sequelize.transaction(async function (t) {
        // 在事务中执行操作
        res = await tag.create(
            {
                user_id: user_id,
                tag: tag_name
            },
            {transaction: t}
        );
        if (post_id) {
            pt = await postTag.create(
                {
                    post_id,
                    tag_id: res.id
                },
                {
                    transaction: t
                }
            );
            // 事务回滚
            // pt = await postTag.create(
            //     {},
            //     {
            //         transaction: t
            //     }
            // );
        }
        // 返回给成功的回调
        return {
            res,
            pt
        }
    }).then(function (results) {
        /* 操作成功，事务会自动提交 */
        //返回到控制器
        return results;
    }).catch(function (err) {
        /* 操作失败，事件会自动回滚 */
        return err;
    });
}

async function deleteTag(user_id, id) {
    let res = await tag.destroy({
        where: {
            id,
            user_id
        }
    });
    // sql
    // let res = await sequelize.query('DELETE * FROM tag WHERE id = ?');
    return res;
}

async function updateTag(user_id, id, name) {
    let res = await tag.update(
        {
            name: name
        },
        {
            where: {
                user_id,
                id
            }
        }
    );
    return res;
}

async function getTag(id) {
    let res = await tag.findById(id);
    return res;
}

async function getAllTag() {
    let res = await tag.findAll();
    return res;
}

let tagService = {
    createTag,
    deleteTag,
    updateTag,
    getTag,
    getAllTag
}
export default tagService;
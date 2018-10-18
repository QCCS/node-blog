//博客-评论模型
import db from '../utils/sequelizeQuery';

const {sequelize, Sequelize} = db;
import post from './post';
import comment from './comment';

let post_comment = sequelize.define('post_comment',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        post_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id',
            }
        },
        comment_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'comment',
                key: 'id',
            }
        },

    },
    {
        freezeTableName: true // Model 对应的表名将与model名相同
    }
);
//关联
post.belongsToMany(comment, {as: 'comment', through: post_comment, foreignKey: 'post_id'});
comment.belongsToMany(post, {as: 'post', through: post_comment, foreignKey: 'comment_id'});
export default post_comment;

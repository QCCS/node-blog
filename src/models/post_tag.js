//博客-标签模型
import db from '../utils/sequelizeQuery';
import post from './post';
import tag from './tag';

const {sequelize, Sequelize} = db;
let post_tag = sequelize.define('post_tag',
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
        tag_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'tag',
                key: 'id',
            }
        },

    },
    {
        freezeTableName: true // Model 对应的表名将与model名相同
    }
);
//关联
post.belongsToMany(tag, {as: 'tag', through: post_tag, foreignKey: 'post_id'});
tag.belongsToMany(post, {as: 'post', through: post_tag, foreignKey: 'tag_id'});
export default post_tag;

//博客模型
import db from '../utils/sequelizeQuery';

const {sequelize, Sequelize} = db;
let post = sequelize.define('post',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        desc: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        content: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        md_content: {
            type: Sequelize.TEXT,
            allowNull: true,
        },
        is_delete: {
            type: Sequelize.TINYINT,
            allowNull: false,
        },
        is_draft: {
            type: Sequelize.TINYINT,
            allowNull: false,
        },
    },
    {
        freezeTableName: true // Model 对应的表名将与model名相同
    }
);
export default post;

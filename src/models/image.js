//图片模型
import db from '../utils/sequelizeQuery';

const {sequelize, Sequelize} = db;
let image = sequelize.define('image',
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
        path: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        size: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
    },
    {
        freezeTableName: true // Model 对应的表名将与model名相同
    }
);
export default image;

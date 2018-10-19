//用户模型
import db from '../utils/sequelizeQuery';

const {sequelize, Sequelize} = db;
let user = sequelize.define('user',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        mobile: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        status: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        created_by: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
    },
    {
        freezeTableName: true // Model 对应的表名将与model名相同
    }
);
export default user;

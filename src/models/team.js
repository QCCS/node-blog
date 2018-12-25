//团队模型
import db from '../utils/sequelizeQuery';

const {sequelize, Sequelize} = db;
let team = sequelize.define('team',
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
        owner: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
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
export default team;

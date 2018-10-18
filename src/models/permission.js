import db from '../utils/sequelizeQuery';

const {sequelize, Sequelize} = db;
let permission = sequelize.define('permission',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,//不要默认时间，不然默认生成时间
        // tableName: 'permission',
        freezeTableName: true // Model 对应的表名将与model名相同
    }
);
export default permission;
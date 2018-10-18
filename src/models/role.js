//已写接口样例
//查询role
//创建角色
import db from '../utils/sequelizeQuery';

const {sequelize, Sequelize} = db;
let role = sequelize.define('role',
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
    },
    {
        timestamps: false,//不要默认时间，不然默认生成时间
        // tableName: 'role',
        freezeTableName: true // Model 对应的表名将与model名相同
    }
);
export default role;
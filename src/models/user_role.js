//用户-角色模型
import db from '../utils/sequelizeQuery';
import user from './user';
import role from './role';

const {sequelize, Sequelize} = db;
let user_role = sequelize.define('user_role',
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
        role_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'role',
                key: 'id',
            }
        },
    },
    {
        timestamps: false,//不要默认时间，不然默认生成时间
        freezeTableName: true // Model 对应的表名将与model名相同
    }
);

//关联
user.belongsToMany(role, {as: 'role', through: user_role, foreignKey: 'user_id'});
role.belongsToMany(user, {as: 'user', through: user_role, foreignKey: 'role_id'});

export default user_role;

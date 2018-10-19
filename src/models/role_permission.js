//角色-权限模型
import db from '../utils/sequelizeQuery';
import role from './role';
import permission from './permission';

const {sequelize, Sequelize} = db;
let role_permission = sequelize.define('role_permission',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        created_by: {
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
        permission_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'permission',
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
permission.belongsToMany(role, {as: 'role', through: role_permission, foreignKey: 'permission_id'});
role.belongsToMany(permission, {as: 'permission', through: role_permission, foreignKey: 'role_id'});

export default role_permission;

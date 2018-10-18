//token模型
import db from '../utils/sequelizeQuery';
import user from './user';

const {sequelize, Sequelize} = db;
let refresh_token = sequelize.define('refresh_token',
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
        refresh_token: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        client_id: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        expires: {
            type: Sequelize.DATE,
            allowNull: false,
        }
    },
    {
        freezeTableName: true // Model 对应的表名将与model名相同
    }
);
user.hasMany(refresh_token);
refresh_token.belongsTo(user);
export default refresh_token;

//博客-评论模型
import db from '../utils/sequelizeQuery';

const {sequelize, Sequelize} = db;
import team from './team';
import user from './user';

let team_user = sequelize.define('team_user',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        team_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'team',
                key: 'id',
            }
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            }
        },

    },
    {
        freezeTableName: true // Model 对应的表名将与model名相同
    }
);
//关联
team.belongsToMany(user, {as: 'user', through: team_user, foreignKey: 'team_id'});
user.belongsToMany(team, {as: 'team', through: team_user, foreignKey: 'user_id'});
export default team_user;

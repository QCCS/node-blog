'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('post_comment', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            post_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'post',
                    key: 'id',
                }
            },
            comment_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'comment',
                    key: 'id',
                }
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('post_comment');
    }
};

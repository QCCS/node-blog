'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('post_tag', {
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
            tag_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'tag',
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
        return queryInterface.dropTable('post_tag');
    }
};

'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('tag', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    // This is a reference to another model
                    model: 'user',
                    // This is the column name of the referenced model
                    key: 'id',
                }
            },
            tag: {
                allowNull: false,
                type: Sequelize.STRING
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
        return queryInterface.dropTable('tag');
    }
};

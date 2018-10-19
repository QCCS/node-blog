'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('image', {
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
            path: {
                allowNull: false,
                type: Sequelize.STRING
            },
            name: {
                allowNull: true,
                type: Sequelize.STRING
            },
            size: {
                allowNull: true,
                type: Sequelize.BIGINT
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
        return queryInterface.dropTable('image');
    }
};

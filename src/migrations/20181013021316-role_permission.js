'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('role_permission', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            role_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'role',
                    key: 'id',
                }
            },
            permission_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'permission',
                    key: 'id',
                }
            },
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('role_permission');
    }
};

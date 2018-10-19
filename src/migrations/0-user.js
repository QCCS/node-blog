'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('user', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING
            },
            mobile: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true
            },
            email: {
                allowNull: true,
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            created_by: {
                type: Sequelize.INTEGER,
                allowNull: true,
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
        return queryInterface.dropTable('user');
    }
};

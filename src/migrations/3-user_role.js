'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('user_role', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
          },
          created_by: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                  model: 'user',
                  key: 'id',
              }
          },
          user_id: {
              allowNull: false,
              type: Sequelize.INTEGER,
              references: {
                  model: 'user',
                  key: 'id',
              }
          },
          role_id: {
              allowNull: false,
              type: Sequelize.INTEGER,
              references: {
                  model: 'role',
                  key: 'id',
              }
          },
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('user_role');
  }
};

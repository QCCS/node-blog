'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('access_token', {
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
          access_token: {
              allowNull: false,
              type: Sequelize.STRING
          },
          client_id: {
              type: Sequelize.STRING,
              allowNull: true,
          },
          expires: {
              type: Sequelize.DATE,
              allowNull: false,
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
      return queryInterface.dropTable('access_token');
  }
};

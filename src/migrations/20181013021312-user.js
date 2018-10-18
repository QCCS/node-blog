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
          }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('user');
  }
};

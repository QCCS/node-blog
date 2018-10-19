'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('post', {
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
            title: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            desc: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            content: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            //是否删除
            is_delete:{
                allowNull: false,
                type: Sequelize.TINYINT,//0，1
            },
            //是否是草稿
            is_draft:{
                allowNull: false,
                type: Sequelize.TINYINT,//0，1
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
        return queryInterface.dropTable('post');
    }
};

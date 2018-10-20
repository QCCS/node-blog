'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('user', [
            {
                name: 'admin1',
                password: 'mac123',
                mobile: '15921552946',
                email: '15921552946@qq.com',
                status:0,
                created_at:new Date(),
                updated_at:new Date()
            },
            {
                name: 'admin2',
                password: 'mac123',
                mobile: '15921552947',
                email: '15921552947@qq.com',
                status:0,
                created_at:new Date(),
                updated_at:new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('user', null, {});
    }
};

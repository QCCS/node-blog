'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('user', [
            {
                name: 'admin1',
                password: '$2a$10$DIK0r9W.4ihVjVJLQAIN2OH7Fj/v0r47yKmfxDts/WaWHMvwi5Mni',
                mobile: '15921552946',
                email: '15921552946@qq.com',
                status:0,
                created_at:new Date(),
                updated_at:new Date()
            },
            {
                name: 'admin2',
                password: '$2a$10$DIK0r9W.4ihVjVJLQAIN2OH7Fj/v0r47yKmfxDts/WaWHMvwi5Mni',
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

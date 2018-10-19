//针对sequlize的配置
const fs = require('fs');
var data = fs.readFileSync('./settings/appSettings.js', 'utf8');
var conf = JSON.parse(data.split("default")[1]);
module.exports = {
    "development": {
        "host": conf.development.host,
        "username": conf.development.user,
        "password": conf.development.password,
        "database": conf.development.database,
        "dialect": "mysql",
        "dialectOptions": {
            "charset": "utf8mb4",
            "collate": "utf8mb4_unicode_ci",
            "supportBigNumbers": true,
            "bigNumberStrings": true
        },
        "define": {
            "underscored": true,
            "charset": "utf8mb4"
        }
    },
    "test": {
        "host": conf.test.host,
        "username": conf.test.user,
        "password": conf.test.password,
        "database": conf.test.database,
        "dialect": "mysql",
        "dialectOptions": {
            "charset": "utf8mb4",
            "collate": "utf8mb4_unicode_ci",
            "supportBigNumbers": true,
            "bigNumberStrings": true
        },
        "define": {
            "underscored": true,
            "charset": "utf8mb4"
        }
    },
    "production": {
        "host": conf.production.host,
        "username": conf.production.user,
        "password": conf.production.password,
        "database": conf.production.database,
        "dialect": "mysql",
        "dialectOptions": {
            "charset": "utf8",
            "collate": "utf8_general_ci",
            "supportBigNumbers": true,
            "bigNumberStrings": true
        },
        "define": {
            "charset": "utf8",
            "underscored": true,
            "dialectOptions": {
                "collate": "utf8_general_ci"
            }
        }
    }
}

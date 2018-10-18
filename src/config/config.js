const fs = require('fs');
var data = fs.readFileSync('./settings/appSettings.js', 'utf8');
var conf = JSON.parse(data.split("default")[1]);
module.exports = {
    "development": {
        "username": "root",
        "password": "mac123",
        "database": conf.development.database,
        "host": "127.0.0.1",
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
        "username": "root",
        "password": "mac123",
        "database": conf.development.database,
        "host": "127.0.0.1",
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
        "username": "root",
        "password": "mac123",
        "database": conf.production.database,
        "host": "127.0.0.1",
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

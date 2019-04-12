//此文件不要修改其他，除了添加key与value
//一定保证key与value为字符串
export default {
    "redis":{
        "enabled": false
    },
    "development": {
        "app_port": 9313,
        "host": "127.0.0.1",
        "user": "root",
        "password": "mac123",
        "port": "3306",
        "database": "node_blog_dev"
    },
    "test": {
        "app_port": 9314,
        "host": "127.0.0.1",
        "user": "root",
        "password": "mac123",
        "port": "3306",
        "database": "node_blog_test"
    },
    "production": {
        "app_port": 9315,
        "host": "127.0.0.1",
        "user": "root",
        "password": "mac123",
        "port": "3306",
        "database": "node_blog_prod"
    },
    "logsPath":"logs/",
    "blog_admin_setting":{
        "prefix":"/admin"
    },
    "blog_front_setting":{
        "prefix":"/blog"
    },
    "blog_setting":{
        "prefix":"/api"
    }
}

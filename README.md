# node-blog

## 环境准备
```
mysql 5.6
node 8+
pm2 2.8

```
## 开始使用 
```
git clone -b master https://github.com/QCCS/tech-share-s.git
```
## 项目设置
应用端口与数据库设置 settings/appSetting.js
```
//此文件不要修改其他，除了添加key与value
export default {
    "development": {
        "app_port": 9313,
        "host": "127.0.0.1",
        "user": "root",
        "password": "password",
        "port": "3306",
        "database": "node_blog_dev"
    },
    "test": {
        "app_port": 9314,
        "host": "127.0.0.1",
        "user": "root",
        "password": "password",
        "port": "3306",
        "database": "node_blog_test"
    },
    "production": {
        "app_port": 9315,
        "host": "127.0.0.1",
        "user": "root",
        "password": "password",
        "port": "3306",
        "database": "node_blog_prod"
    }
}
```
## 安装项目
```
node install initAll
pm2 start dist/index.js -i 0 --name "app-name"
```
## dev
```
//环境准备
node install init
node install mysqlCreateDev
node install sequlizeDevTable
node install seedDataDev
//打包与启动
node install buildDev
node install runDev
```
开发实时编译与重启
```
node watchChange.js
npm run superdev
```
## 部署 test
```
//环境准备
node install init
node install mysqlCreateTest
node install sequlizeTestTable
node install seedDataTest
//打包与启动
node install buildTest
node install runTest
```

## 命令行工具
运行

```
node install help
```
输出
```
显示帮助:
node install help
生成环境：打包与数据库环境准备:
node install initAll
安装项目依赖:
node install init
shell创建Prod数据库:
node install mysqlCreateProd
shell创建dev数据库:
node install mysqlCreateDev
shell创建test数据库:
node install mysqlCreateTest
直接导入sql文件:
node install mysqlSource
sequlize创建dev数据库:
node install sequlizeDevDB
sequlize创建dev数据表:
node install sequlizeDevTable
sequlize创建test数据库:
node install sequlizeTestDB
sequlize创建test数据表:
node install sequlizeTestTable
sequlize创建Prod数据库:
node install sequlizeProdDB
sequlize创建Prod数据表:
node install sequlizeProdTable
dev填充数据:
node install seedDataDev
test填充数据:
node install seedDataTest
prod填充数据:
node install seedDataProd
打包开发环境:
node install buildDev
打包开发环境:
node install runDev
打包Test环境:
node install buildTest
运行Test环境:
node install runTest
打包Prod环境:
node install buildProd
运行Prod环境:
node install runProd
备份dev数据库:
node install backup
备份test数据库:
node install backupTest
备份prod数据库:
node install backupProd

```
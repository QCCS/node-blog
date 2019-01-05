# todo list
- ssr-react服务端渲染 
- nice-swa项目官方网站
- ~~token 持久化~~
- ~~token刷新机制~~
- ~~接口错误捕获~~
- ~~文档 swagger 生成~~
- ~~接口测试~~
- 用户权限管理
- 添加团队机制
- 每一个团队添加超级管理员
- 添加普通管理员
- 添加创造者（写文章的）
- 添加读者(只能读)
- ~~博客添加md字段保存~~
- 添加websock 统计在线人数
- 注册邮件验证
- 添加静态页面文件配置
> node-blog 可能是最好的Node博客系统。基于 nice-swa 后端脚手架项目。
# 项目介绍文档
使用 Nodejs + mysql 搭建的博客系统。使用 Koa2 ES6 语法开发，Webpack打包。
数据库方面，既可以直接原生连接进行数据操作，也可以使用Sequlize ORM框架对数据操作。

[项目地址](https://github.com/QCCS/node-blog)

[在线文档](https://qccs.github.io/node-blog/docs/#/)

## 功能介绍
+ [x] 注册与Jwt登陆认证
+ [ ] 用户以及权限管理
+ [ ] 博客发布管理
+ [x] 文件上传
+ [ ] 博客标签管理
+ [ ] 博客评论管理
+ [x] ~~博客点赞~~
+ [ ] 博客阅读量
+ [ ] 博客前台 ejs 模板引擎
+ [x] 集成 swagger 文档
+ [x] 日志记录
+ [x] 项目数据备份
+ [ ] 开发扫描工具
+ [x] 安装部署命令行工具
+ [ ] 集成测试

## 开发相关
+ [x] 控制器自动扫描
+ [x] service 自动扫描
+ [ ] swagger 文档自动生成
+ [ ] 接口自动扫描
+ [ ] 开发自动化

## 项目目录
> node-blog 
- dist 打包之后的目录
- docs 文档目录
- publicImg 上传的图片目录
- settings 应用设置目录
- src 核心源码目录
    - backup-db 数据库备份目录
    - config 项目配置目录
    - controller 控制器目录
    - dao 数据获取与ORM框架model对应
    - middleware 中间件目录
    - migrations 迁移文件目录
    - models 数据模型目录
    - route 路由目录
    - seeders 数据种子文件目录
    - service 链接控制器与模型
    - utils 工具函数目录
    - static 静态文件目录
    - views 前端模板引擎目录
    - index.js 入口文件
- backup-db.js 备份
- install.js 命令行工具
- watchChange.js 开发时工具，扫描器
- webpack.config.js 打包配置

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

## 开发项目
```
nvm use 9
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
开发时建议运行 watchChange.js 让扫描器自动扫描

## 开发自动测试
```
//测试
npm run test
//测试并且生成报表
npm run nyc
//生成html测试报表
npm run testReport
```
测试截图 npm run nyc
![](https://raw.githubusercontent.com/QCCS/node-blog/master/docs/imgs/testing.png)
测试报表 npm run testReport
![](https://raw.githubusercontent.com/QCCS/node-blog/master/docs/imgs/test-report.png)
## 部署测试环境
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
测试:
node install test
测试，显示报表:
node install nyc
生成html测试报表:
node install testReport
安装项目依赖:
node install init
推荐使用：shell创建Prod数据库:
node install mysqlCreateProd
推荐使用：shell创建dev数据库:
node install mysqlCreateDev
推荐使用：shell创建test数据库:
node install mysqlCreateTest
直接导入生产环境sql文件，sql文件放在项目跟目录:
node install mysqlSource
不推荐使用：sequlize创建dev数据库:
node install sequlizeDevDB
sequlize创建dev数据表:
node install sequlizeDevTable
不推荐使用：sequlize创建test数据库:
node install sequlizeTestDB
sequlize创建test数据表:
node install sequlizeTestTable
不推荐使用：sequlize创建Prod数据库:
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
运行开发环境:
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

## 项目依赖介绍
> dependencies & devDependencies
- koa2 node后端框架
- babel-cli 语言转换工具
- babel-plugin-transform-runtime 运行时转换语言包
- webpack 打包工具
- webpack-cli 打包命令工具
- copy-webpack-plugin 打包时拷贝文件
- koa-bodyparser 请求体转换
- koa2-swagger-ui swagger文档
- koa-views 模板引擎
- ejs 模板引擎语法
- koa-router 路由中间件
- koa2-file-upload 文件上传
- jsonwebtokentoken 签名与解密
- koa-jwt token http认证
- koa-static 静态文件配置
- koa-logger 请求输出log中间件
- bcryptjs 密码加密加盐 
- mysql 原生node链接数据库
- mysql2 sequelize 链接数据库依赖
- sequelize orm框架
- sequelize-cli 迁移文件命令行工具
- ava 测试
- request 测试接口
- nyc 测试报表
- chokidar 监听文件变化
- mysql-backup-db 备份数据库

|    name    | desc |
| :---------- | :--- |
| koa2    | node后端框架 |
| babel-cli | 语言转换工具 |



## 项目截图
登陆
![](https://raw.githubusercontent.com/QCCS/node-blog/master/docs/imgs/login.png)
新增博客
![](https://raw.githubusercontent.com/QCCS/node-blog/master/docs/imgs/create_post.png)
获取单个博客(可浏览器直接查看)
![](https://raw.githubusercontent.com/QCCS/node-blog/master/docs/imgs/get_post.png)
![](https://raw.githubusercontent.com/QCCS/node-blog/master/docs/imgs/post_detail.png)
获取全部博客(可浏览器直接查看)
![](https://raw.githubusercontent.com/QCCS/node-blog/master/docs/imgs/get_all_post.png)
![](https://raw.githubusercontent.com/QCCS/node-blog/master/docs/imgs/post_list.png)
获取用户列表1
![](https://raw.githubusercontent.com/QCCS/node-blog/master/docs/imgs/user.png)

## 其他博客项目
这也是我为什么做博客系统的原因，找不到一个我想要的。
方便开发，扩展，测试，与部署
+ ~~无接口文档~~
+ ~~无开发自动化~~
+ ~~无扫描器~~
+ ~~无测试报告~~
+ ~~无多环境一键部署~~
+ ~~无前后端分离~~
+ ~~无数据迁移与备份~~
+ ~~无日志记录~~
+ ~~无运维监控~~

## 发布历史
branch:date-feature_name

## 参考网站
- [Node支持情况](https://node.green)
- [koajs](https://koajs.com)
- [sequelizejs](http://docs.sequelizejs.com)
- [ejs](http://ejs.co)
- [ava](https://github.com/avajs/ava)
- [wordpress](https://wordpress.org/)
- [jpress](http://www.jpress.io/)



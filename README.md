# node-blog

环境准备
```
mysql 5.6
node 8+
pm2 2.8

```

安装项目
```
git clone -b master https://github.com/QCCS/tech-share-s.git
node install initAll
pm2 start dist/index.js -i 0 --name "app-name"
```

部署dev


部署test
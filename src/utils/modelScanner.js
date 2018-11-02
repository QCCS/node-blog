/**
 * Created by zhouli on 18/11/2
 */
const fs = require('fs');
const Sequelize = require('Sequelize');

function getModel(path) {
    let data = fs.readFileSync(path, 'utf8');
    let doc1 = data.split('sequelize.define');
    if (doc1.length > 1) {
        doc1 = doc1[1];
        let doc2 = doc1.split(');')[0];
        let doc3 = doc2.replace(/\s+/g, '');
        let doc4 = '{' + doc3.split('\',{')[1];
        let doc5 = doc4.split('},{')[0] + '}';
        let doc6 = doc3.split('\',{')[0];
        let doc7 = doc6.split('\'');
        if (doc7.length > 1) {
            doc7 = doc7[1];
        }
        return [doc7, toJsonString(doc5)];
    } else {
        //不读取
    }
}

//不标准json转json字符串
function toJsonString(doc5) {
    let a = eval('(' + doc5 + ')');
    //需要引入 Sequelize
    return JSON.parse(JSON.stringify(a));
}

//遍历目录
function readDirSync(path) {
    let controllerArr = [];
    var pa = fs.readdirSync(path);
    pa.forEach(function (ele) {
        controllerArr.push(ele);
    });
    return controllerArr;
}

function getModelList(tables) {
    let content = [];
    tables.map(item => {
        let table = getModel('src/models/' + item);
        if (table && table.length === 2 && table[0].length && table[0].length > 0) {
            let modelKey = table[0];
            let model = table[1];
            let obj = {};
            obj[modelKey] = JSON.parse(JSON.stringify(model));
            content.push(obj);
        }
    });
    return content;
}

function apiListToString(modelList) {
    let list = {modelList};
    return JSON.stringify(list);
}

function init(path, fileName) {
    let tables = readDirSync('src/models');
    let content = getModelList(tables);
    let targetFile = apiListToString(content);
    fs.writeFileSync('src/static/swagger-docs/api-models.json', targetFile);
}

init();
//在根目录运行 node src/utils/modelScanner.js
//会生成 src/static/swagger-docs/api-models.json
module.exports = {
    init
}

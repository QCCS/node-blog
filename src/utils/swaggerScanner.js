// 通过模型与路由扫描器生成的文档，
// 再次扫描解析
// 生成最终文档,如何生成，参考 doc.json
const fs = require('fs');
let tpl = fs.readFileSync('src/static/swagger-docs/doc-tpl.json', 'utf8');
// modelList是一个数组，把其中每一个元素，都在模板文件中definitions生成一个对象
// 还需要生成一个tag
let modelsList = fs.readFileSync('src/static/swagger-docs/api-models.json', 'utf8');
// api-list 是一个数组，把其中每一个元素，都在模板文件中 paths 生成一个对象
let apiList = fs.readFileSync('src/static/swagger-docs/api-list.json', 'utf8');

let tplJson = JSON.parse(tpl);
let modelsListJson = JSON.parse(modelsList);
let apiListJson = JSON.parse(apiList);

function modelListToDefinitions(models, apiList, tplJson) {
    let obj = {};
    let objPath = {};
    let tags = [];
    let modelKey = [];
    let pathKey = [];
    models.map(item => {
        for (let key in item) {
            modelKey.push(key)
        }
    });
    apiList.map(item => {
        let obj = {
            "name": item.modelName,
            "description": "对" + item.modelName + "的CURD",
            "externalDocs": {
                "description": "更多",
                "url": "/swagger-docs/doc-user.json"
            }
        };
        tags.push(obj);
        for (let key in item) {
            pathKey.push(item['api_url'])
        }
    });
    models.map((item, index) => {
        obj[modelKey[index]] = {
            type: "object",
            xml: {
                "name": modelKey[index]
            },
            properties: item[modelKey[index]]
        }
    });

    apiList.map((item, index) => {
        let key = index+":" + item.api_url;
        objPath[key]={};
        objPath[key][item.method] = {
            "tags": [
                item.modelName
            ],
            "summary": item.method + "-" + item.modelName,
            "description": '控制器' + item.params,
            "operationId": item.method + "-" + item.api_url,
            "consumes": [
                "application/json",
                "application/xml"
            ],
            "produces": [
                "application/xml",
                "application/json"
            ],
            "parameters": [
                {
                    "in": "body",
                    "name": "body",
                    "description": "user object that needs to be added to the store",
                    "required": true,
                    "schema": {
                        "$ref": "#/definitions/" + item.modelName
                    }
                }
            ],
            "responses": {
                "405": {
                    "description": "Invalid input"
                }
            },
            "security": [
                {
                    "petstore_auth": [
                        "write:" + item.modelName,
                        "read:" + item.modelName
                    ]
                }
            ]
        }
    });
    tplJson.definitions = obj;
    tplJson.paths = objPath;
    tplJson.tags = tags;
    return tplJson;
}

function init(path, fileName) {
    let res = modelListToDefinitions(modelsListJson.modelList, apiListJson.list, tplJson);
    let targetFile = JSON.stringify(res);
    fs.writeFileSync('src/static/swagger-docs/api-doc.json', targetFile);
}
init();
//在根目录运行 node src/utils/swaggerScanner.js
//会生成 src/static/swagger-docs/api-doc.json
module.exports = {
    init
}

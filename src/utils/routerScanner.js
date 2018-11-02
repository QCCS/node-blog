//生成 接口列表
/**
 * Created by zhouli on 18/11/2
 */
const fs = require('fs');
function getApiList(path) {
    let api_arr = [];
    let data = fs.readFileSync(path, 'utf8');
    let doc1 = data.split('swagger-doc-start')[1];
    let doc2 = doc1.split('swagger-doc-end')[0];
    let doc3 = doc2.split('router')[1];
    let doc4 = doc3.split(';')[0];
    let doc5 = doc4.split(')');
    doc5 = removeEmpty(doc5);
    for (let i = 0; i < doc5.length; i++) {
        let obj = {}
        let item_arr = doc5[i].split('\'');
        if(item_arr.length>2){
            obj.method = getMethod(item_arr[0]);
            obj.api_url = item_arr[1];
            obj.params = getParams(item_arr[2]);
            obj.modelName = getParams(item_arr[2]).split('Controller')[0];
            api_arr.push(obj);
        }
    }
    return api_arr;
}
// 驼峰转换下划线
function humpToLine(name) {
    return name.replace(/([A-Z])/g,"_$1").toLowerCase();
}
function getParams(str) {
    let key = str.split(',')[1];
    return key;
    //todo
    //在控制器中找参数
    // let controllerName = key.split('.')[0];
    // let controllerMethed = key.split('.')[1];
    // console.log(controller[controllerName][controllerMethed]);
}

function getMethod(str) {
    switch (str){
        case '.put(':{
            return 'put';
        }
        case '.post(':{
            return 'post';
        }
        case '.delete(':{
            return 'delete';
        }
        case '.get(':{
            return 'get';
        }
        default :{
            return 'post';
        }
    }
}

function removeEmpty(doc5) {
    for (let i = 0; i < doc5.length; i++) {
        doc5[i] = doc5[i].replace(/\s+/g, '');
    }
    return doc5;
}


function apiListToString(list) {
    let apiList = {list}
    return JSON.stringify(apiList);
}

function init(root,scanName) {
    let blogBackModuleRouter = getApiList('src/route/blogBackModuleRouter.js');
    let userPermissionModuleRouter = getApiList('src/route/userPermissionModuleRouter.js');
    let all = blogBackModuleRouter.concat(userPermissionModuleRouter);
    let targetFile = apiListToString(all);
    fs.writeFileSync('src/static/swagger-docs/api-list.json', targetFile);

}
init();
//在根目录运行 node src/utils/routerScanner.js
//会生成 src/static/swagger-docs/api-list.json
module.exports = {
    init
}

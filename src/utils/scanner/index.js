/**
 * Created by zhouli on 18/10/22
 * 扫描器核心函数
 */
var fs = require("fs");
var controllerArr = [];
var targetFile = "";

//遍历目录
function readDirSync(path) {
    controllerArr = [];
    var pa = fs.readdirSync(path);
    pa.forEach(function (ele, index) {
        var info = fs.statSync(path + "/" + ele);
        if (info.isDirectory()) {
            controllerArr.push(ele)
            // console.log("dir: "+ele)
            // readDirSync(path+"/"+ele);
        } else {
            // console.log("file: "+ele)
        }
    })
}

//生成 import
function getImport(arr, scanName) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        let cName = arr[i] + scanName;
        let moduleName = "'.\/" + arr[i] + "'";
        str += "import " + cName + " from " + moduleName;
        str += ";\n";
    }
    str += "\n";
    // console.log(str)
    return str;
}

//生成 export
function getExport(arr, scanName) {
    let str = "export default {";
    for (let i = 0; i < arr.length; i++) {
        str += "\n";
        let cName = "    " + arr[i] + scanName;
        str += cName;
        str += ",";
    }
    str += "\n";
    str += "}";
    // console.log(str)
    return str;
}

function getFile(scanName) {
    return "\/\/通过控制器扫描器生成的文件\n" + getImport(controllerArr, scanName) + getExport(controllerArr, scanName);
}

function init(root,scanName) {
    readDirSync(root);
    targetFile = getFile(scanName);
    fs.writeFileSync(root + '/index.js', targetFile);
    console.log("扫描" + scanName + "完成");
}

exports.scanner = {
    init
}
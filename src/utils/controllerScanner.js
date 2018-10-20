/**
 * Created by zhouli on 18/10/19
 * 控制器扫描器，通过扫描控制器 controller 目录下，自动生成控制器入口文件
 */
var fs = require("fs");
var controllerArr = [];
var root = "./src/controller";
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
function getImport(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        let cName = arr[i] + "Controller";
        let moduleName = "'.\/" + arr[i] + "'";
        str += "import " + cName + " from " + moduleName;
        str += ";\n";
    }
    str += "\n";
    // console.log(str)
    return str;
}

//生成 export
function getExport(arr) {
    let str = "export default {";
    for (let i = 0; i < arr.length; i++) {
        str += "\n";
        let cName = "    "+arr[i] + "Controller";
        str += cName;
        str += ",";
    }
    str += "\n";
    str += "}";
    // console.log(str)
    return str;
}
function getFile() {
    return "\/\/通过控制器扫描器生成的文件\n"+getImport(controllerArr)+getExport(controllerArr);
}

function init() {
    readDirSync(root);
    targetFile = getFile();
    fs.writeFileSync(root+'/index.js' , targetFile);
    console.log("扫描完成");
}
module.exports = {
    init
}
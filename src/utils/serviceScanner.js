/**
 * Created by zhouli on 18/10/22
 * service 扫描器，通过扫描控制器 service 目录下，自动生成控制器入口文件
 */
var scanner = require("./scanner");
//可以对核心扫描逻辑进行改进，包裹后导出
module.exports = {
    scanner:scanner.scanner.init
};

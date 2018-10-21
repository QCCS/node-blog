/**
 * Created by zhouli on 18/10/18
 */
import logger from 'koa-logger';
import fs from 'fs';
import appSettings from '../../settings/appSettings';
export default function logNote() {
    let _path = appSettings.logsPath;
    return logger((str, args) => {
        console.log(str)
        let t = new Date();
        let _t = t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + "-" + t.getHours();
        let logFileName = "log" + _t + '.txt';
        if (!fs.existsSync(_path)) {
            fs.mkdirSync(_path);
        }
        fs.appendFile(_path + logFileName, str);
    })
}

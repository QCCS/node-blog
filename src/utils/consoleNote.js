/**
 * Created by zhouli on 18/10/18
 */
import fs from 'fs';
import appSettings from '../../settings/appSettings';
export default function logNote(msg) {
    let _path = appSettings.logsPath;
    if(typeof msg != 'string'){
        msg = JSON.stringify(msg);
    }else {
        msg+='\n';
    }
    let t = new Date();
    let _t = t.getFullYear() + '-' + (t.getMonth() + 1) + '-' + t.getDate() + '-' + t.getHours();
    let logFileName = 'console' + _t + '.txt';
    if (!fs.existsSync(_path)) {
        fs.mkdirSync(_path);
    }
    fs.appendFile(_path + logFileName, msg);
}

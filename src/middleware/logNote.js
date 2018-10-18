/**
 * Created by zhouli on 18/10/18
 */
import logger from 'koa-logger';
import fs from 'fs';
export default function logNote() {
    return logger((str, args) => {
        console.log(str)
        let t = new Date();
        let _t = t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + "-" + t.getHours();
        let logFileName = "log" + _t + '.txt';
        fs.appendFile('logs/' + logFileName, str);
    })
}

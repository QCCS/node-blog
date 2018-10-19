/**
 * Created by zhouli on 18/10/18
 */
import fs from 'fs';
export default function logNote(msg) {
    console.log(msg)
    console.log(typeof msg != "string")
    if(typeof msg != "string"){
        msg = JSON.stringify(msg)
    }
    let t = new Date();
    let _t = t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + "-" + t.getHours();
    let logFileName = "console" + _t + '.txt';
    fs.appendFile('logs/' + logFileName, msg);
}

/**
 * Created by zhouli on 18/10/18
 */
import uploader from 'koa2-file-upload';
export default function uploaderConfig() {
    let options = {
        "url": '/api/upload',
        "provider": "local",//存储位置类型
        // "mimetypes": ['image/png','image/bmp'],
        // 如果没有配置,将不进行类型检查 http://www.freeformatter.com/mime-types-list.html
        "folder": "publicImg/images",//上传文件夹,后面 images 与 urlPath images 保持一致，这样可以直接把返回的 url 保持，
        "storeDir": 'img',//存储文件夹
        "urlPath": "images"//获取的时候url，可以存储，设置上传文件夹为静态路由，之后直接访问
    }
    return uploader(options);
}

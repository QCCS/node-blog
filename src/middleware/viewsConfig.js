/**
 * Created by zhouli on 18/10/18
 */
import views from 'koa-views';
export default function viewsConfig() {
    // Must be used before any router is used
    // 无模板引擎
    // app.use(views(process.cwd() + '/dist/views'));
    // app.use(views('.' + __dirname + '/dist/views'));
    // ejs模板引擎
    // 配置扩展名 ejs
    return views(process.cwd() + '/dist/views', {
        extension: 'ejs'
        // map: {html: 'ejs'}
    });
}

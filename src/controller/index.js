/**
 * Created by zhouli on 18/9/24
 */
async function indexController(ctx, next) {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Cache-Control', 'no-cache');
    await next();
}
export default indexController;


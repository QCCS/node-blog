import postReadService from '../../service/postRead/postReadService';

async function createPostRead(ctx) {
    let data = ctx.request.body;
    console.log(data);
    //事务
    //需要插入 post_postRead
    let user = ctx.user;
    let postRead = await postReadService.createPostRead(user.id, data.post_id);
    ctx.body = postRead;
    console.log(postRead);
}

async function deletePostRead(ctx) {
    let user = ctx.user;
    let b = await postReadService.deletePostRead(user.id, ctx.params.id);
    ctx.body = b;
    console.log(b);
}

async function getPostRead(ctx) {
    let postRead = await postReadService.getPostRead(ctx.params.id);
    ctx.body = postRead;
    console.log(postRead)
}

async function getAllPostRead(ctx) {
    let postRead = await postReadService.getAllPostRead();
    ctx.body = postRead;
    console.log(postRead)
}

let postReadController = {
    createPostRead,
    deletePostRead,
    getPostRead,
    getAllPostRead
}
export default postReadController;

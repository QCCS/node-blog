// 标签 curd
import tagService from '../../service/tag/tagService';
import postTagService from '../../service/postTag/postTagService';

async function createTag(ctx) {
    let data = ctx.request.body;
    let user = ctx.user;
    let tag = await tagService.createTag(user.id, data.name, data.post_id);
    ctx.body = tag;
    console.log(tag);
}

async function deleteTag(ctx) {
    let user = ctx.user;
    let b = await tagService.deleteTag(user.id, ctx.params.id);
    ctx.body = b;
    console.log(b);
}

async function updateTag(ctx) {
    let data = ctx.request.body;
    let user = ctx.user;
    let tag = await tagService.updateTag(user.id, data.id, data.name);
    ctx.body = tag;
    console.log(tag);
}

async function getTag(ctx) {
    let tag = await tagService.getTag(ctx.params.id);
    ctx.body = tag;
    console.log(tag)
}

async function getAllTag(ctx) {
    let tag = await tagService.getAllTag();
    ctx.body = tag;
    console.log(tag)
}

let tagController = {
    createTag,
    deleteTag,
    updateTag,
    getTag,
    getAllTag
}
export default tagController;

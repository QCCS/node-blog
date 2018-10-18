// 图片 curd
import imageService from '../../service/image/imageService';

async function createImage(ctx) {
    let data = ctx.request.body;
    let user = ctx.user;
    //事务
    //需要插入 post_image
    let image = await imageService.createImage(
        user.id,
        data.name,
        data.path,
        data.size
    );
    ctx.body = image;
    console.log(image);
}

async function deleteImage(ctx) {
    let user = ctx.user;
    let b = await imageService.deleteImage(user.id,ctx.params.id);
    ctx.body = b;
    console.log(b);
}

async function updateImage(ctx) {
    let data = ctx.request.body;
    let user = ctx.user;
    let image = await imageService.updateImage(
        data.id,
        user.id,
        data.name,
        data.path,
        data.size
    );
    ctx.body = image;
    console.log(image);
}

async function getImage(ctx) {
    let image = await imageService.getImage(ctx.params.id);
    ctx.body = image;
    console.log(image)
}

async function getAllImage(ctx) {
    let image = await imageService.getAllImage();
    ctx.body = image;
    console.log(image)
}

let imageController = {
    createImage,
    deleteImage,
    updateImage,
    getImage,
    getAllImage
}
export default imageController;

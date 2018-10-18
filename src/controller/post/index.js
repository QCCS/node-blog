// 博客 curd
import postService from '../../service/post/postService';
import postCommentService from '../../service/postComment/postCommentService';
import postTagService from '../../service/postTag/postTagService';
import postLikeService from '../../service/postLike/postLikeService';
import postReadService from '../../service/postRead/postReadService';
async function createPost(ctx) {
    let data = ctx.request.body;
    let user = ctx.user;
    console.log(data);
    let post = await postService.createPost(
        user.id,
        data.title,
        data.desc,
        data.content,
        data.is_delete,
        data.is_draft
    );
    ctx.body = post;
    console.log(post);
}

async function deletePost(ctx) {
    let user = ctx.user;
    let b = await postService.deletePost(user.id, ctx.params.id);
    ctx.body = b;
    console.log(b);
}

async function updatePost(ctx) {
    let data = ctx.request.body;
    let user = ctx.user;
    let post = await postService.updatePost(
        user.id,
        data.id,
        data.title,
        data.desc,
        data.content,
        data.is_delete,
        data.is_draft
    );
    ctx.body = post;
    console.log(post);
}
// todo
async function getPost(ctx) {
    let post = await postService.getPost(ctx.params.id);
    let comments = await postCommentService.getCommentByPostId(ctx.params.id);
    let tags = await postTagService.getTagByPostId(ctx.params.id);
    let likes = await postLikeService.getLikeByPostId(ctx.params.id);
    let reads = await postReadService.getReadByPostId(ctx.params.id);
    ctx.body = {
        post,
        comments,
        tags,
        likes,
        reads
    }
}

async function getAllPost(ctx) {
    let post = await postService.getAllPost();
    ctx.body = post;
    console.log(post)
}
let postController = {
    createPost,
    deletePost,
    updatePost,
    getPost,
    getAllPost
}
export default postController;

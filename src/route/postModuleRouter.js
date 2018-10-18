// 博客系统的路由全部在这里
// 定义路由
import Router from 'koa-router';
import commentController from '../controller/comment';
import imageController from '../controller/image';
import postController from '../controller/post';
import tagController from '../controller/tag';
import postCommentController from '../controller/postComment';
import postLikeController from '../controller/postLike';
import postReadController from '../controller/postRead';
import postTagController from '../controller/postTag';
// 路由配置
const router = new Router(
    {
        prefix: '/blog_api'//每一个路由的前缀
    }
);

router
    .post('/comment', commentController.createComment)
    .delete('/comment/:id', commentController.deleteComment)
    .put('/comment', commentController.updateComment)
    .get('/comment/:id', commentController.getComment)
    .get('/comment', commentController.getAllComment)

    .post('/image', imageController.createImage)
    .delete('/image/:id', imageController.deleteImage)
    .put('/image', imageController.updateImage)
    .get('/image/:id', imageController.getImage)
    .get('/image', imageController.getAllImage)

    .post('/post', postController.createPost)
    .delete('/post/:id', postController.deletePost)
    .put('/post', postController.updatePost)
    .get('/post/:id', postController.getPost)
    .get('/post', postController.getAllPost)

    .post('/tag', tagController.createTag)
    .delete('/tag/:id', tagController.deleteTag)
    .put('/tag', tagController.updateTag)
    .get('/tag/:id', tagController.getTag)
    .get('/tag', tagController.getAllTag)

    .post('/post_comment', postCommentController.createPostComment)
    .delete('/post_comment/:id', postCommentController.deletePostComment)
    .get('/post_comment/:id', postCommentController.getPostComment)
    .get('/post_comment', postCommentController.getAllPostComment)

    .post('/post_like', postLikeController.createPostLike)
    .delete('/post_like/:id', postLikeController.deletePostLike)
    .get('/post_like/:id', postLikeController.getPostLike)
    .get('/post_like', postLikeController.getAllPostLike)

    .post('/post_read', postReadController.createPostRead)
    .delete('/post_read/:id', postReadController.deletePostRead)
    .get('/post_read/:id', postReadController.getPostRead)
    .get('/post_read', postReadController.getAllPostRead)

    .post('/post_tag', postTagController.createPostTag)
    .delete('/post_tag/:id', postTagController.deletePostTag)
    .get('/post_tag/:id', postTagController.getPostTag)
    .get('/post_tag', postTagController.getAllPostTag);

export default {
    router: router,
};

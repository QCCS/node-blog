// 博客前台
// 后端渲染

import Router from 'koa-router';
import postService from '../service/post/postService';
import postCommentService from '../service/postComment/postCommentService';
import postTagService from '../service/postTag/postTagService';
import postLikeService from '../service/postLike/postLikeService';
import postReadService from '../service/postRead/postReadService';

// 路由配置
const router = new Router(
    {
        prefix: '/blog'//每一个路由的前缀
    }
);

router
    .get('/', async (ctx) => {
        let post = await postService.getAllPost();
        await ctx.render('blog_index', {
            post,
        });
    })
    .get('/:id', async (ctx) => {
        let user = ctx.user;
        let post = await postService.getPost(ctx.params.id);
        let comments = await postCommentService.getCommentByPostId(ctx.params.id);
        let tags = await postTagService.getTagByPostId(ctx.params.id);
        let likes = await postLikeService.getLikeByPostId(ctx.params.id);
        let reads = await postReadService.getReadByPostId(ctx.params.id);
        await ctx.render('blog', {
            user: user,
            title: post.title,
            user_id: post.user_id,
            post,
            comments,
            tags,
            likes,
            reads
        });
    });

export default {
    router: router,
};

// 定义路由
import Router from 'koa-router';
import loginController from '../controller/LoginController';
import userController from '../controller/user';
import permissionController from '../controller/permission';
import roleController from '../controller/role';
import rolePermissionController from '../controller/rolePermission';
import userRoleController from '../controller/userRole';
//测试博客后端渲染
import postService from '../service/post/postService';
import postCommentService from '../service/postComment/postCommentService';
import postTagService from '../service/postTag/postTagService';
import postLikeService from '../service/postLike/postLikeService';
import postReadService from '../service/postRead/postReadService';

// 路由配置
const router = new Router(
    {
        prefix: '/api'//每一个路由的前缀
    }
);

router
    .get('/blog', async (ctx) => {
        let post = await postService.getAllPost();
        await ctx.render('blog_index', {
            post,
        });
    })
    .get('/blog/:id', async (ctx) => {
        let user = ctx.user;
        let post = await postService.getPost(ctx.params.id);
        let comments = await postCommentService.getCommentByPostId(ctx.params.id);
        let tags = await postTagService.getTagByPostId(ctx.params.id);
        let likes = await postLikeService.getLikeByPostId(ctx.params.id);
        let reads = await postReadService.getReadByPostId(ctx.params.id);
        await ctx.render('blog', {
            user:user,
            title:post.title,
            user_id:post.user_id,
            post,
            comments,
            tags,
            likes,
            reads
        });
    })
    //测试用get
    .get('/login', loginController)
    .post('/register', userController.createUser)
    .post('/user', userController.createUser)
    .get('/user', userController.getAllUser)
    .put('/user', userController.updateUser)
    .delete('/user/:id', userController.deleteUser)

    .post('/role', roleController.createRole)
    .delete('/role/:id', roleController.deleteRole)
    .put('/role', roleController.updateRole)
    .get('/role/:id', roleController.getRole)
    .get('/role', roleController.getAllRole)

    .post('/role/permission', rolePermissionController.createRolePermission)
    .delete('/role/permission/:id', rolePermissionController.deleteRolePermission)
    .put('/role/permission', rolePermissionController.updateRolePermission)
    .get('/role/permission/:id', rolePermissionController.getRolePermission)
    .get('/role/permission', rolePermissionController.getAllRolePermission)

    .post('/user/role', userRoleController.createUserRole)
    .delete('/user/role/:id', userRoleController.deleteUserRole)
    .put('/user/role', userRoleController.updateUserRole)
    .get('/user/role/:id', userRoleController.getUserRole)
    .get('/user/role', userRoleController.getAllUserRole)

    .post('/permission',permissionController.createPermission)
    .delete('/permission/:id',permissionController.deletePermission )
    .put('/permission',permissionController.updatePermission)
    .get('/permission/:id', permissionController.getPermission)
    .get('/permission',permissionController.getAllPermission );

export default {
    router: router,
};

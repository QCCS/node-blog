//用户权限设计
import Router from 'koa-router';
import userController from '../controller/user';
import permissionController from '../controller/permission';
import roleController from '../controller/role';
import rolePermissionController from '../controller/rolePermission';
import userRoleController from '../controller/userRole';
import blogSetting from '../../settings';
// 路由配置
const router = new Router(
    {
        prefix: blogSetting.blog_setting.prefix//每一个路由的前缀
    }
);

router
    //测试用get
    .get('/login', userController.loginController)
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

    .post('/permission',permissionController.createPermission)
    .delete('/permission/:id',permissionController.deletePermission )
    .put('/permission',permissionController.updatePermission)
    .get('/permission/:id', permissionController.getPermission)
    .get('/permission',permissionController.getAllPermission )

    .post('/roles/permissions', rolePermissionController.createRolePermission)
    .delete('/roles/permissions/:id', rolePermissionController.deleteRolePermission)
    .put('/roles/permissions', rolePermissionController.updateRolePermission)
    .get('/roles/permissions/:id', rolePermissionController.getRolePermission)
    .get('/roles/permissions', rolePermissionController.getAllRolePermission)

    .post('/users/roles', userRoleController.createUserRole)
    .delete('/users/roles/:id', userRoleController.deleteUserRole)
    .put('/users/roles', userRoleController.updateUserRole)
    .get('/users/roles/:id', userRoleController.getUserRole)
    .get('/users/roles', userRoleController.getAllUserRole);

export default {
    router: router,
};

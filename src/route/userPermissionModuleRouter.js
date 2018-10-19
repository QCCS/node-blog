//用户权限设计
import Router from 'koa-router';
import loginController from '../controller/LoginController';
import userController from '../controller/user';
import permissionController from '../controller/permission';
import roleController from '../controller/role';
import rolePermissionController from '../controller/rolePermission';
import userRoleController from '../controller/userRole';

// 路由配置
const router = new Router(
    {
        prefix: '/api'//每一个路由的前缀
    }
);

router
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

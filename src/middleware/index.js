//拦截校验token，解密token
import validateToken from './validateToken';
import logNote from './logNote';
import uploaderConfig from './uploaderConfig';
import errorDel from './errorDel';
import swaggerConfig from './swaggerConfig';
import koaJwtConfig from './koaJwtConfig';
import viewsConfig from './viewsConfig';

export default {
    validateToken,
    logNote,
    uploaderConfig,
    errorDel,
    swaggerConfig,
    koaJwtConfig,
    viewsConfig,
}

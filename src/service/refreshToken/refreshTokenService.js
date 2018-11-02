import refreshToken from '../../models/refresh_token';

async function createRefreshToken(user_id, refresh_token, client_id, expires) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await refreshToken.create(
            {
                user_id,
                refresh_token,
                client_id,
                expires
            },
        );
    } catch (e) {
        // console.error(e)
    }
    return res;

}

async function deleteRefreshToken(user_id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await refreshToken.destroy({
            where: {
                user_id
            }
        });
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function updateRefreshToken(user_id, id, refresh_token) {

    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await refreshToken.update(
            {
                refresh_token: refresh_token
            },
            {
                where: {
                    user_id,
                    id
                }
            }
        );
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function getRefreshToken(id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await refreshToken.findById(id);
    } catch (e) {
        // console.error(e)
    }
    return res;

}

async function getAllRefreshToken() {

    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await refreshToken.findAll();
    } catch (e) {
        // console.error(e)
    }
    return res;
}

let refreshTokenService = {
    createRefreshToken,
    deleteRefreshToken,
    updateRefreshToken,
    getRefreshToken,
    getAllRefreshToken
};
export default refreshTokenService;

import refreshToken from '../../models/refresh_token';
async function createRefreshToken(user_id, refresh_token, client_id,expires) {
    let res = await refreshToken.create(
        {
            user_id,
            refresh_token,
            client_id,
            expires
        },

    );
    return res;
}

async function deleteRefreshToken(user_id) {
    let res = await refreshToken.destroy({
        where: {
            user_id
        }
    });
    return res;
}

async function updateRefreshToken(user_id, id, refresh_token) {
    let res = await refreshToken.update(
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
    return res;
}

async function getRefreshToken(id) {
    return await refreshToken.findById(id);
}

async function getAllRefreshToken() {
    return await refreshToken.findAll();
}

let refreshTokenService = {
    createRefreshToken,
    deleteRefreshToken,
    updateRefreshToken,
    getRefreshToken,
    getAllRefreshToken
};
export default refreshTokenService;

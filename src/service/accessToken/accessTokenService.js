import accessToken from '../../models/access_token';
async function createAccessToken(user_id, access_token, client_id,expires) {
    let res = await accessToken.create(
        {
            user_id,
            access_token,
            client_id,
            expires
        },

    );
    return res;
}

async function deleteAccessToken(user_id, id) {
    let res = await accessToken.destroy({
        where: {
            id,
            user_id
        }
    });
    return res;
}

async function updateAccessToken(user_id, id, access_token) {
    let res = await accessToken.update(
        {
            access_token: access_token
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

async function getAccessToken(id) {
    let res = await accessToken.findById(id);
    return res;
}

async function getAllAccessToken() {
    let res = await accessToken.findAll();
    return res;
}

let accessTokenService = {
    createAccessToken,
    deleteAccessToken,
    updateAccessToken,
    getAccessToken,
    getAllAccessToken
}
export default accessTokenService;
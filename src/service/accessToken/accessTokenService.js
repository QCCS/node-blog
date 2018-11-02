import accessToken from '../../models/access_token';
async function createAccessToken(user_id, access_token, client_id,expires) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res =await accessToken.create(
            {
                user_id,
                access_token,
                client_id,
                expires
            },

        );
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function deleteAccessToken(user_id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await accessToken.destroy({
            where: {
                user_id
            }
        });
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function updateAccessToken(user_id, id, access_token) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await accessToken.update(
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
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function getAccessToken(id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await accessToken.findById(id);
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function getAllAccessToken() {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await accessToken.findAll();
    } catch (e) {
        // console.error(e)
    }
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

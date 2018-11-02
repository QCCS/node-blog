import image from '../../models/image';

async function createImage(user_id, name, path, size) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res =  await image.create({
            user_id: user_id,
            name: name,
            path: path,
            size: size,
        });
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function deleteImage(user_id,id) {
    // sql
    // let res = await sequelize.query('DELETE * FROM image WHERE id = ?');
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await image.destroy({
            where: {
                user_id,
                id
            }
        });
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function updateImage(id, user_id, name, path, size) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res =await image.update(
            {
                name: name,
                path: path,
                size: size,
            },
            {
                where: {
                    id,
                    user_id
                }
            }
        );
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function getImage(id) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res = await image.findById(id);
    } catch (e) {
        // console.error(e)
    }
    return res;
}

async function getAllImage() {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        res =await image.findAll();
    } catch (e) {
        // console.error(e)
    }
    return res;
}

let imageService = {
    createImage,
    deleteImage,
    updateImage,
    getImage,
    getAllImage
};
export default imageService;

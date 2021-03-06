const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const responseMessage = require('../modules/responseMessage');
const creatorService = require('../service/creatorService');

module.exports = {
    readAllCreators: async (req, res) => {
        try {
            const creators = await creatorService.getAllCreators();
            if (!creators) {
                console.log('creators 테이블이 비어있습니다.');
                return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
            }
            return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_CREATOR_ALL_SUCCESS, creators));
        } catch (error) {
            console.log(error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
        }
    },

    readNewCreators: async (req, res) => {
        try {
            const creators = await creatorService.getNewCreators();
            if (!creators) {
                console.log('creators 테이블이 비어있습니다.');
                return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
            }
            return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_NEW_CREATOR_PROFILE_SUCCESS, creators));
        } catch (error) {
            console.log(error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
        }
    }
}
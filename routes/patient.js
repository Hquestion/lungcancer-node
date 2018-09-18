const GROUP_NAME = 'patient';
const Joi = require('joi');
const models = require('../models');
const {paginationDefine} = require('../utils/router-helper');

module.exports = [
    {
        method: 'GET',
        path: `/${GROUP_NAME}/search`,
        handler: async (request, reply) => {
            try {
                const results = await models['info_patient'].schema('lungcancer')
                    .findAndCountAll({
                        attributes: {

                        },
                        limit: request.query.limit,
                        offset: (request.query.page - 1) * request.query.limit,
                        include: {
                            model: models['v_history_patient_search'],
                            where: {

                            }
                        }
                    });
                reply(results);
            } catch (e) {
                console.log(e);
            }
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '病人信息管理',
            validate: {
                query: {
                    ...paginationDefine
                }
            }
        }
    }
];

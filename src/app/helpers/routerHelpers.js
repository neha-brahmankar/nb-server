import Joi from 'joi';

export default {
    validateParams: (schema, name) => (req, res, next) => {
        const result = Joi.validate({ param: req['params'][name] }, schema);
        if (result.error) {
            return res.status(400).json(result.error)
        } else {
            if(!req.value) req.value = {};
            if(!req.value['params']) req.value['params'] = {};
            req.value['params'][name] = result.value.param;
            next();
        }
    },

    validateBody: (schema) => (req, res, next) => {
        const result = Joi.validate(req.body, schema);
        if (result.error) {
            return res.status(400).json(result.error)
        } else {
            if(!req.value) req.value = {};
            if(!req.value['body']) req.value['body'] = {};
            req.value['body'] = result.value;
            next();
        }
    },

    schemas: {
        idSchema: Joi.object().keys({
            param: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
        }),
        authSchema: Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })
    }
}
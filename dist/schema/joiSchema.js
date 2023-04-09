import Joi from "joi";
export var moviesSchema = Joi.object({
    name: Joi.string().required(),
    platform: Joi.string().required(),
    genre: Joi.string().required(),
    watched: Joi.boolean().required()
});

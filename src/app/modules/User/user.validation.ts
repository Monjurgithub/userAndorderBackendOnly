import Joi from 'joi';
const JoiValidationSchema = Joi.object({
    userId: Joi.number().required(),
    username: Joi.string().required(),
    password: Joi.string().max(10).required(),
    fullName: Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
    }).required(),
    age: Joi.number().required(),
    email: Joi.string().email().required(),
    isActive: Joi.boolean().required().default(true),
    hobbies: Joi.array().items(Joi.string()),
    address: Joi.object({
        street: Joi.string().required(),
        city: Joi.string().required(),
        country: Joi.string().required(),
    }).required(),
})

export default JoiValidationSchema
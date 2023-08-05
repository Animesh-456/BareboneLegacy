import Joi from "joi"
export const regschema = Joi.object(
    {
        fname: Joi.string().required(),
        lname: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
    }
)

export const loginschema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
})


export const taskschema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    email: Joi.string().required(),
})
const Joi = require('joi')

const validateUser = (user) => {
    const UserSchema = Joi.object({
        username: Joi.string().min(5).max(30).required(),
        password:Joi.string().min(8).max(20).required(),
        details:Joi.string().min(5).max(100).optional(),
    }).options({abortEarly:false})
    return UserSchema.validate(user)
}

const validateLogin = (user) => {
    const UserSchema = Joi.object({
        username: Joi.string().min(5).max(30).required(),
        password:Joi.string().min(8).max(20).required(),
    }).options({abortEarly:false})
    return UserSchema.validate(user)
}


module.exports = {
    validateUser,
    validateLogin
}
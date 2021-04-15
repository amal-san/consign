const userService = require('../service/user.service')
const validate = require('../validations/user.validation')


const createUser = async ( body ) => {
    const userBody = validate.validateUser(body)
    if(userBody.error) throw userBody.error
    return await userService.createUser(userBody.value);
}

const userLogin = async ( body ) => {
    const authparams = validate.validateLogin(body)
    if(authparams.error) throw authparams.error
    return await userService.loginUser(authparams.value);

}

const Users = async () => {
    return await userService.Users();
}


module.exports = {
    Users,
    createUser,
    userLogin
}
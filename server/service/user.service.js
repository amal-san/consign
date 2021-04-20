const User = require('../models/user.model')
const ApiError = require('../utils/ApiError')
const Auth = require('../utils/Auth');
const httpStatus = require('http-status');



const createUser = async ( body ) => {
    const user = new User(body)
    if ((await findUserByUsername(body.username)).length == 0) {
        user.save( (err ) => {
            if(err) throw new ApiError(httpStatus.NOT_IMPLEMENTED, "user creation failed")
        })
        const token = Auth.createToken(user._id)
        const authUser = [{
            id: user._id,
            username: user.username,
            details: user.details,
            token
        }]
        return authUser
    }
    throw new ApiError(httpStatus.NOT_FOUND, "username already exits")
}

const loginUser = async ( body ) => {
    const user = await User.find({username:body.username, password:body.password})
    if(!user.length > 0) throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect username or password')
    const token = Auth.createToken(user[0]._id)
    const authUser = [{
        id:user[0]._id,
        username:user[0].username,
        details:user[0].details,
        token
    }]
    return authUser
}


const findUserByUsername = async ( username ) => {
    const user = await User.find({username})
    return user
}



const Users = async () => {
    const users = await User.find({})
    return users
}

module.exports =  {
    Users,
    createUser,
    loginUser
}
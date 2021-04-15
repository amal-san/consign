const User = require('../models/user.model')
const ApiError = require('../utils/ApiError')
const Token = require('../utils/Token')
const httpStatus = require('http-status');



const createUser = async ( body ) => {
    const user = new User(body)
    user.save((err, res) => {
        if(err) throw err 
    })
    const token = Token.createToken(user._id)
    const authUser =[{
        id:user._id,
        username:user.username,
        details:user.details,
        token
    }]
    console.log(authUser)
    return authUser
}

const loginUser = async ( body ) => {
    const user = await User.find({username:body.username, password:body.password})
    if(!user.length > 0) throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect username or password')
    const token = Token.createToken(user[0]._id)
    const authUser = [{
        id:user[0]._id,
        username:user.username,
        details:user.details,
        token
    }]
    return authUser
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
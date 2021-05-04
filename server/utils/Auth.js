const httpStatus = require('http-status');
const jwt = require('jsonwebtoken');
const ApiError = require('./ApiError')

const createToken = ( id ) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        id
    }
    const token = jwt.sign(data, jwtSecretKey,{expiresIn: '24h'});
    return token
}

const validateToken = ( context ) => {
    if(!context.request.body.headers.Authorization) return false
    let token = context.request.body.headers.Authorization.split("Bearer")[1].slice(1)
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    try {
        const verified = jwt.verify(token, jwtSecretKey);
        return verified ? true : false
    } catch (error) {
        return false
    };
}


module.exports = {
    createToken,
    validateToken
}

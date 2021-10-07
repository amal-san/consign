const clientService = require('../service/client.service')
const httpStatus = require('http-status')
const config = require('../config')
const ApiError = require('../utils/ApiError')


const Clients = async ( ) => {
    const data = await clientService.Clients()
    return config.isEmpty(data) ? data : new ApiError(httpStatus.NOT_FOUND, "no clients")
}

const createClient = async ( body ) => {
    return await clientService.createClient(body);
}

const updateClient = async ( body ) => {
    return await clientService.updateClient(body);
}

const deleteClient = async ( body ) => {
    return await clientService.deleteClient(body);
}

module.exports = {
    createClient,
    updateClient,
    deleteClient,
    Clients
}
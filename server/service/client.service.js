const Client = require('../models/client.model')
const ApiError = require('../utils/ApiError')




const createClient = async ( body ) => {
    const client = new Client(body)
    client.save((err) => {
        if (err){
            throw new ApiError(httpStatus.NOT_IMPLEMENTED, "parcel creation failed")
        } 
    })
    return client
}


const updateClient = async (updateBody) => {
    const client = Client.findOneAndModify({name:updateBody.name}, {age:updateBody.age,
        address:updateBody.address,dob:updateBody.dob,phone:updateBody.phone})
    return client
}

const deleteClient = async (body) => {
    const clientfound = Client.find({name:body.name})
    Client.findOneAndDelete({name:body.name, age:body.age})
    return clientfound
}

const Clients = async () => {
    return await Client.find({})
}

module.exports = {
    createClient,
    updateClient,
    deleteClient,
    Clients
}
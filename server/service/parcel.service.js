const httpStatus = require('http-status')
const Parcel = require('../models/parcel.model')
const ApiError = require('../utils/ApiError')


const findParcelByTrackingId = async ( id ) => {
    return await Parcel.find({id})
}

const findParcelDeliveries = async () => {
    return await Parcel.find({status:true})
}

const Parcels = async () => {
    return await Parcel.find({})
}


module.exports = {
    findParcelByTrackingId,
    Parcels,
    findParcelDeliveries
}
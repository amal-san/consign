const parcelService = require('../service/parcel.service')
const ApiError = require('../utils/ApiError')
const validate = require('../validations/parcel.validation')
const httpStatus = require('http-status')



const findParcelById = async (body) => {
    const data = await parcelService.findParcelByTrackingId(body)
    return  data.length > 0 ? data : new ApiError(httpStatus.NOT_FOUND, "parcel not found")
}

const Parcels = async () => {
    const data = await parcelService.Parcels()
    return  data.length > 0 ? data : new ApiError(httpStatus.NOT_FOUND, "no parcels")
}

const findParcelDeliveries = async () => {
    const data = await parcelService.findParcelDeliveries()
    return  data.length > 0 ? data : new ApiError(httpStatus.NOT_FOUND, "no delivered parcels")    
}

module.exports = {
    findParcelById,
    Parcels,
    findParcelDeliveries
}
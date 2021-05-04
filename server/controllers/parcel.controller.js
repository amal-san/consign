const parcelService = require('../service/parcel.service')
const ApiError = require('../utils/ApiError')
const validate = require('../validations/parcel.validation')
const httpStatus = require('http-status')
const config = require('../config')




const createParcel = async ( body ) => {
    const parcelBody = validate.validateParcelCreate(body)
    if(parcelBody.error) throw parcelBody.error
    return await parcelService.createParcel(parcelBody.value);
}


const updateParcel = async (body) => {
    const parcelUpdate = validate.validateParcelOnId(body)
    if(parcelUpdate.error) return new ApiError(httpStatus.NOT_ACCEPTABLE,parcelUpdate.error)
    return await parcelService.updateParcelByTrackingId(body) 
}

const deleteParcel = async ( body ) => {
    const parcelDelete = validate.validateParcelOnId(body)
    if(parcelDelete.error) return new ApiError(httpStatus.NOT_ACCEPTABLE,parcelDelete.error)
    return await parcelService.deleteParcelByTrackingId(body) 

}

const findParcelByTrackingId = async (body) => {
    const data = await parcelService.findParcelByTrackingId(body.tracking_id)
    return config.isEmpty(data) ? data : new ApiError(httpStatus.NOT_FOUND, "parcel not found")
}

const Parcels = async () => {
    const data = await parcelService.Parcels()
    return config.isEmpty(data) ? data : new ApiError(httpStatus.NOT_FOUND, "no parcels")
}

const findParcelDeliveries = async (bool) => {
    const data = await parcelService.findParcelDeliveries(bool.status)
    return config.isEmpty(data) ? data : new ApiError(httpStatus.NOT_FOUND, "no delivered parcels")    
}

module.exports = {
    findParcelByTrackingId,
    Parcels,
    findParcelDeliveries,
    createParcel,
    updateParcel,
    deleteParcel,
}
const httpStatus = require('http-status')
const Parcel = require('../models/parcel.model')
const ApiError = require('../utils/ApiError')
var crypto = require('crypto')


const createParcel = async ( body ) => {
    const parcel = new Parcel(body)
    parcel.tracking_id = crypto.randomBytes(12).toString('hex');
    console.log(parcel.tracking_id)
    parcel.save((err) => {
        if (err){
            console.log(err)
            throw new ApiError(httpStatus.NOT_IMPLEMENTED, "parcel creation failed")
        } 
    })
    return parcel
}

const updateParcelByTrackingId = async (updateBody) => {
    const parcel = await findParcelByTrackingId(updateBody.tracking_id);
    if (!parcel) {
      throw new ApiError(httpStatus.NOT_FOUND, 'parcel not found');
    }
    Object.assign(parcel, updateBody);
    parcel.save((err) => {
        if (err) throw new ApiError(httpStatus.NOT_IMPLEMENTED, "parcel updatation failed")
    })
    return parcel;
};

const deleteParcelByTrackingId = async ( body ) => {
    const parcel = await findParcelByTrackingId(body.tracking_id)
    if (!parcel) {
        throw new ApiError(httpStatus.NOT_FOUND, 'parcel not found');
    }
    parcel.remove();
    return parcel;
}
  


const findParcelByTrackingId = async ( id ) => {
    return await Parcel.findOne({tracking_id:id})
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
    findParcelDeliveries,
    createParcel,
    updateParcelByTrackingId,
    deleteParcelByTrackingId
}
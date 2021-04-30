const httpStatus = require('http-status')
const Parcel = require('../models/parcel.model')
const ApiError = require('../utils/ApiError')
var crypto = require('crypto')
const config = require('../config/index')


const createParcel = async ( body ) => {
    const parcel = new Parcel(body)
    parcel.tracking_id = crypto.randomBytes(10).toString('hex');
    parcel.created_at = config.dateNow();
    parcel.status = false;
    parcel.save((err) => {
        if (err){
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
    let details = updateBody.tracking_details
    console.log('ahi')
    details ? delete updateBody.tracking_details : null;
    Object.assign(parcel, updateBody);
    console.log(details, config.dateNow)
    details !== 'none' ? parcel.tracking_details.push({date:config.dateNow() ,details:details}): null;
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
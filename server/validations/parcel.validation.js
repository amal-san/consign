const Joi = require('joi')


const validateParcelCreate = (parcel) => {
    const ParcelSchema = Joi.object({
        name: Joi.string().min(5).max(30).required(),
        weight:Joi.string().min(3).max(20).required(),
        receiver:Joi.string().min(4).max(40).required(),
        sender:Joi.string().min(4).max(40).required(),
        created_at:Joi.string().min(8).max(40).optional(),
        status:Joi.boolean().optional(),
        tracking_id:Joi.string().optional(),
        tracking_details:Joi.string().optional(),
    }).options({abortEarly:false})
    return ParcelSchema.validate(parcel)
}


const validateParcelOnId = (parcel) => {
    const ParcelSchema = Joi.object({
        name: Joi.string().min(5).max(30).optional(),
        weight:Joi.string().min(3).max(20).optional(),
        receiver:Joi.string().min(4).max(40).optional(),
        sender:Joi.string().min(4).max(40).optional(),
        created_at:Joi.string().min(8).max(40).optional(),
        status:Joi.boolean().optional(),
        tracking_id:Joi.string().required(),
        tracking_details:Joi.string().optional(),
    }).options({abortEarly:false})
    return ParcelSchema.validate(parcel)
}


module.exports = {
    validateParcelCreate,
    validateParcelOnId
}
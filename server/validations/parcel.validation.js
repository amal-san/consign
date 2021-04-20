const Joi = require('joi')


const validateParcel = (parcel) => {
    const ParcelSchema = Joi.object({
        username: Joi.string().min(5).max(30).required(),
        password:Joi.string().min(8).max(20).required(),
        details:Joi.string().min(5).max(100).optional(),
    }).options({abortEarly:false})
    return ParcelSchema.validate(parcel)
}
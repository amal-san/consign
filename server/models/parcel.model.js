const mongoose = require('mongoose')
const crypto = require('crypto')
const { Schema } = mongoose;

const parcelSchema = new Schema({
  
  name:{
    type:String,
    required:true,
    trim:true,
  },
  weight: {
    type:String,
    required:true,
    trim:true,
  },
  receiver: {
    type:String,
    required:true,
    trim:true
  },
  sender:{
    type:String,
    required:true,
    trim:true
  },
  created_at: {
    type:String,
    required:true,
    trim:true
  },
  status: {
    type:Boolean,
    default:false
  },
  tracking_id: {
    type:String,
  },
  tracking_details: {
    type:[String],
    default:[],
  }
});

const Parcel = mongoose.model('Parcel', parcelSchema);

module.exports = Parcel;

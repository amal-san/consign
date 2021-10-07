const mongoose = require('mongoose')
const { Schema } = mongoose;

const clientSchema = new Schema({
  
  name:{
    type:String,
    required:true,
    trim:true,
  },
  age: {
    type:String,
    required:true,
    trim:true,
  },
  address: {
    type:String,
    trim:true
  },
  dob:{
    type:String,
    required:true,
    trim:true
  },
  phone: {
    type:String,
    required:true,
    trim:true
  }
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;

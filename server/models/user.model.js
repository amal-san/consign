const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  username:{
    type:String,
    required:true,
    trim:true,
    unique:true,
  },
  password: {
    type:String,
    required:true,
    trim:true,
    minlength:8,
    validate(value) {
      if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
        throw new Error('Password must contain at least one letter and one number');
      }},
  },
  details:String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

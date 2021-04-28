const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    min: 2,
    max: 255
  },
  lastname: {
    type: String,
    required: true,
    min: 2,
    max: 255
  },
  email: {
    type: String,
    required: true,
    min: 2,
    max: 512
  },
  password: {
    type: String,
    require: true,
    min: 6,
    max: 1024
  },
  date: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('users', userSchema);
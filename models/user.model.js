const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('../config/config.json');

// Rating and review schema
let User_Schema = new Schema({
  first_name: {
    type: String,
    default: ''
  },
  last_name: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: null,
    required: true
  },  
  phone: {
    type: String,
    default: null,
  },
  password: {
    type: String,
    default: "",   
    required: true
  },
  photo:{
    type: String,
  },
  role:{
    type: String,
    default: config.role.EMPLOYEE,
    require: true,
    enum : [config.role.EMPLOYEE,config.role.MANAGER,config.role.TL],
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Number,
    default: 0
  }
});

const User = mongoose.model('User', User_Schema);
module.exports = User;
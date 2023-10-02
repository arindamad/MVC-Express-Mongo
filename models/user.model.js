const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  },  
  phone: {
    type: String,
    default: null,
  },
  password: {
    type: String,
    default: "",
  },
  photo:{
    type: mongoose.Types.ObjectId,
  },
  role:{
    type: String,
    default: null,
    require: true
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
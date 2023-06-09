const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Rating and review schema
let Admin_Schema = new Schema({
  first_name: {
    type: String,
    default: ''
  },
  last_name: {
    type: String,
    default: ''
  },
  mobile: {
    type: String,
    default: '',
    unique: true
  },
  email: {
    type: String,
    default: '',
    unique: true
  },
  password: {
    type: String,
    default: false,
  },
  role:{
    type: String,
    default: false,
  },
  photo:{
    type: String,
    default: null,
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
});


const Admin = mongoose.model('Admin', Admin_Schema);
module.exports = Admin;

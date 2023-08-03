const mongoose = require('mongoose');
const { NUMBER } = require('sequelize');
const Schema = mongoose.Schema;

// Rating and review schema
let User_Schema = new Schema({
  product_id: {
    type: mongoose.Types.ObjectId,
    required: true    
  },
  user_id: {
    type: mongoose.Types.ObjectId,       
  },
  qty: {
    type: Number,
    default: null,
  },  
  message: {
    type: String,
    default: "",
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
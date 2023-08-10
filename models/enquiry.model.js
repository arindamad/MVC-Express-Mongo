const mongoose = require('mongoose');
const { NUMBER } = require('sequelize');
const Schema = mongoose.Schema;

// Rating and review schema
let User_Schema = new Schema({
  enquire_id: {
    type: String,
    required: true,
    unique: true
  },
  product_id: {
    type: mongoose.Types.ObjectId,
    ref:'Product',
    required: true    
  },
  user_id: {
    type: mongoose.Types.ObjectId,  
    ref:'User',     
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

const User = mongoose.model('Enquiry', User_Schema);
module.exports = User;
const mongoose = require('mongoose');
const { NUMBER } = require('sequelize');
const Schema = mongoose.Schema;

// Rating and review schema
let Product_Schema = new Schema({
  product_id: {
    type: String,
    default: ''
  },
  product_name: {
    type: String,
    default: ''
  },
  sku: {
    type: String,
    default: ''
  },
  short_description: {
    type: String,
    default: null,
  },  
  long_description: {
    type: String,
    default: "",
  },
  photo:{
    type: String,
  },
  photo_gallery:{
    type: Array,
  },
  video:{
    type: Array,
  },
  brand:{
    type: mongoose.Types.ObjectId,
  },
  category:{
    type: mongoose.Types.ObjectId,
  }, 
  variants: [mongoose.Types.ObjectId],
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

const User = mongoose.model('Product', Product_Schema);
module.exports = User;
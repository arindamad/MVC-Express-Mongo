const mongoose = require('mongoose');
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
  application: {
    type: String,
    default: "",
  },
  brochure: {
    type: mongoose.Types.ObjectId,
    ref:'Image'
  },
  photo:{
    type: mongoose.Types.ObjectId,
    ref:'Image'
  },
  photo_gallery:[{
    type: mongoose.Types.ObjectId,
    ref:'Image'
  }],
  video:{
    type: mongoose.Types.ObjectId,
  },
  brand:{
    type: mongoose.Types.ObjectId,
    ref:'Brand'
  },
  category:{
    type: mongoose.Types.ObjectId,
    ref:'Category'
  }, 
  relatedProducts:[{
    type: mongoose.Types.ObjectId,
    ref:'Product'
  }],
  product_url: {
    type: String
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

const Product = mongoose.model('Product', Product_Schema);
module.exports = Product;
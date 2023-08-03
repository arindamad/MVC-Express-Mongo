const mongoose = require('mongoose');
const { NUMBER } = require('sequelize');
const Schema = mongoose.Schema;

// Rating and review schema
let Image_Schema = new Schema({
  alt_text: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  type: {
    type: String,
  },  
  size: {
    type: String,
    default: "",
  },
  image:{
    type: String,
    default: null,
  },  
  crop:{
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
  }
});

const Image = mongoose.model('Image', Image_Schema);
module.exports = Image;
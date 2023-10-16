const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require("../config/config.json");
const slugify = require('slugify'); 


// Rating and review schema
let Brand_Schema = new Schema({
  brand_name: {
    type: String,
    default: '',
    required: true,   
  },
  brand_slug: {
    type: String,
    unique: true,
    default: function() {
      return slugify(this.brand_name);
    },
  },
  brand_description: {
    type: String,
    default: ''
  }, 
  brand_category: {
    type: mongoose.Types.ObjectId,
    required: true,   
    ref:"BrandCategory"
  }, 
  image: {
    type: mongoose.Types.ObjectId,
    ref:"Image"
  },
  inner_banner: {
    type: mongoose.Types.ObjectId,
    ref:"Image"
  },
  url: {
    type:String
  },
  status: {
    type: Number,
    default: 0
  }
}, {
  versionKey: false
});

const Slot = mongoose.model('Brand', Brand_Schema);

module.exports = Slot;

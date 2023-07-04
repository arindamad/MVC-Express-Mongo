const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require("../config/config.json");

// Rating and review schema
let Brand_Schema = new Schema({
  brand_name: {
    type: String,
    default: '',
    required: true,   
  },
  brand_description: {
    type: String,
    default: ''
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

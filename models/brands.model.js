const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require("../config/config.json");

// Rating and review schema
let Brand_Schema = new Schema({
  brand_name: {
    type: String,
    default: '',
    required: true,
    ref: 'User'
  },
  brand_description: {
    type: String,
    default: ''
  },
  short_id: {
    type: String,
    default: ''
  },
  role:{
    type: String,
    default: null,
    require: true
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

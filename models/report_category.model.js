const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require("./user.model");
const config = require("../config/config.json");

// Rating and review schema
let report_Category_Schema = new Schema({
  name: {
    type: String,
    default: '',
    required: true
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: 'report_category'
  },
  reference_value: {
    type: String,
    default: ''
  },
  short_name: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
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
}, {
  versionKey: false
});

const Slot = mongoose.model('report_category', report_Category_Schema);

module.exports = Slot;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Rating and review schema
let  Brand_Category_Schema = new Schema({
  brand_category_name: {
    type: String,
    default: '',
    required: true,   
  },
  brand_category_description: {
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

const Slot = mongoose.model('Brand', Brand_Category_Schema);

module.exports = Slot;

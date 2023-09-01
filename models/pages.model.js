const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Rating and review schema
let Page_Schema = new Schema({
  page_name: {
    type: String,
    unique:true
  },
  page_slug: {
    type: String,
    default: "",
  },  
  page_description: {
    type: String,
    default: "",
  },  
  meta_title: {
    type: String,
    default: "",
  }, 
  meta_description: {
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

const Page = mongoose.model('Page', Page_Schema);
module.exports = Page;
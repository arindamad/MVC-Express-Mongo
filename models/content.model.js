const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Rating and review schema
let Page_Schema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId }, 
  section_prop: {
    type: String,
    default: "",
  },
  section_name: {
    type: String,
    default: "",
  },
  section_value: {
    type: String,
    default: "",
  }, 
  page_id: {
    type: mongoose.Types.ObjectId,
    ref:"Page"
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
    default: 1
  }
});

const Page = mongoose.model('CMS', Page_Schema);
module.exports = Page;
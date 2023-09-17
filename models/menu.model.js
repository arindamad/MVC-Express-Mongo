const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Rating and review schema
let Page_Schema = new Schema({
  menu_name: {
    type: String,
    default: "",
  },
  menu_items: [{
    type: mongoose.Types.ObjectId,
    ref:"Page"
  }],
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: { 
    type: Date,
    default: Date.now
  }
});

const Page = mongoose.model('Menu', Page_Schema);
module.exports = Page;
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image:{ 
    type: mongoose.Types.ObjectId,
    ref: "Image"
  },
  parent:{
    type: mongoose.Types.ObjectId,
    ref: "Category"
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


const Category = mongoose.model('Category', categorySchema);


module.exports = Category;

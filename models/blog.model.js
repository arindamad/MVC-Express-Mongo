const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Rating and review schema
let Blog_Schema = new Schema({
  title: {
    type: String,
    default: ''
  },
  slug: {
    type: String,
    unique:true
  },
  description: {
    type: String,
    default: '',
  },    
  photo:{
    type: mongoose.Types.ObjectId,
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

const User = mongoose.model('Blog', Blog_Schema);
module.exports = User;
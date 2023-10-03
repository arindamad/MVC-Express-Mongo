const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Rating and review schema
let User_Schema = new Schema({
  enquire_id: {
    type: String,
    required: true,    
  },
  name: {
    type: String,
    required: true,    
  },
  email: {
    type: String,  
  },
  phone: {
    type:String, 
    required: true     
  },
  subject: {
    type: String,
    default: null,
  },  
  message: {
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
    default: 1
  }
});

const User = mongoose.model('Enquiry', User_Schema);
module.exports = User;
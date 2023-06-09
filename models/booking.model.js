const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Rating and review schema
let Booking_Schema = new Schema({
  serial_no:{
    type:Number,
    default: 0
  },
  slot_id: {
    type: mongoose.Schema.Types.ObjectId,
    default: '',
    ref:'Slot',
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref:'User'
  },
  other_patient: {
    type: String,
    default: ''
  },
  age: {
    type: Number,
    default: 0
  },
  bookedby: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,  
    ref:'User'
  },
  gender: {
    type: String,
    default: "",
    enum:["male", "female", "others"]
  },
  booking_for_other: {
    type: Boolean,
    default: false
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
    type: String,
    default: "",
    enum:["booked", "cancelled", "rejected", "done"]
  }
});


const Booking = mongoose.model('Booking', Booking_Schema);
module.exports = Booking;
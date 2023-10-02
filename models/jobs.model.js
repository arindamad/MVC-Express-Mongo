const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Rating and review schema
let Job_Schema = new Schema({
  job_id: {
    type: String,
    default: null,
    unique:true
  }, 
  job_title: {
    type: String,
    default: '',
    require: true
  },
  job_industry: {
    type: String,
    default: null,
  },  
  job_roles: {
    type: Array,
    default: ''
  },
  eligibility: {
    type: Array,
  },
  benifits: {
    type: Array,
  },
  job_type: {
    type: String,
    default: "",
  },
  locations: {
    type: String,
    default: "",
  },
  experience: {
    type: String,
    ref:'Image'
  },
  working_hour:{
    type: String,
    ref:'Image'
  },
  salary:{
    type: String,
    ref:'Image'
  },
  vacancy:{
    type: Number,
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

const Job = mongoose.model('Job', Job_Schema);
module.exports = Job;
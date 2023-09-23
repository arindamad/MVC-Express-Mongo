const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Rating and review schema
let Page_Schema = new Schema({
  menu_name: {
    type: String,
    default: "",
  },
  menu_items: [{
   name:{
    type:String,
   },
   slug:{
    type:String,
   },
   target:{
    type:String,
   },
   items:[
    {
      name:{
        type:String,
       },
       slug:{
        type:String,
       },
       target:{
        type:String,
       },
    }
   ]
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
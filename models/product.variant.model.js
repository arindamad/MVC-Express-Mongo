const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VariantSchema = new Schema({
  product_id: {
    type: mongoose.Types.ObjectId,
    default: ''
  },
  color: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  // Add more attributes as needed
});

const Variant = mongoose.model('Variant', VariantSchema);

module.exports = Variant;
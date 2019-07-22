const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  code: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status:{
    type: String, //on off del appr
  }
},
{
  timestamps: true
});

module.exports = mongoose.model('Category', categorySchema);

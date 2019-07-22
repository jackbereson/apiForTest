const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const optionSchema = new Schema({
  name: {
    type:String
  },
  value: {
    type:String
  },
  autoLoad: {
    type:String
  },
  status:{
    type: String,
  }
},
{
  timestamps: true
});

module.exports = mongoose.model('Option', optionSchema);
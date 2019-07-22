const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const linkSchema = new Schema({
  url: {
    type:String
  },
  name: {
    type:String
  },
  img: {
    type:String
  },
  target: {
    type:String
  },
  description: {
    type:String
  },
  visible: {
    type:String
  },
  owner: {
    type:Number
  },
  rating: {
    type:Number
  },
  rel: {
    type:String
  },
  notes: {
    type:String
  },
  rss: {
    type:String
  },
  status:{
    type: String,
  }
},
{
  timestamps: true
});

module.exports = mongoose.model('Link', linkSchema);
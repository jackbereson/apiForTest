const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const metaPostSchema = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  metaKey: {
    type:String
  },
  meteValue: {
    type:String
  }
},
{
  timestamps: true
});

module.exports = mongoose.model('metaPost', metaPostSchema);
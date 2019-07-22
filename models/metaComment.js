const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const metaCommentSchema = new Schema({
  comment: {
    type: Schema.Types.ObjectId,
    ref: 'Comment'
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

module.exports = mongoose.model('MetaComment', metaCommentSchema);

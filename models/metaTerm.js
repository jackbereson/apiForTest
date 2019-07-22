const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const metaTermSchema = new Schema({
  term: {
    type: Schema.Types.ObjectId,
    ref: 'Term'
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

module.exports = mongoose.model('metaTerm', metaTermSchema);
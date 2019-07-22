const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const metaUserSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  metaKey: {
    type:String
  },
  meteValue: {
    type:String
  },
  status:{
    type: String,
  }
},
{
  timestamps: true
});

module.exports = mongoose.model('metaUser', metaUserSchema);
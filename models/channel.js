const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const channelSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  creator: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  },
  community: {
    type: Schema.Types.ObjectId,
    ref: 'Community'
  },
  status:{
    type: String, //on off archive 
  }
},
{
  timestamps: true
});

module.exports = mongoose.model('Channel', channelSchema);

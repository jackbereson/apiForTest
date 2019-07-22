const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const memberSchema = new Schema({
  comunity: {
    type: Schema.Types.ObjectId,
    ref: 'Comunity'
  },
  channels: [
    {
      channel:{
        type: Schema.Types.ObjectId,
        ref: 'Channel'
      },
      setting:{
        type: String // notice - mute
      },
      _id:false
    }
  ],
  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  status:{
    type: String, //normal - team - blocked - off
  }
},
{
  timestamps: true
});

module.exports = mongoose.model('Member', memberSchema);

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
  userName:{
    type: String,
  },
  bio:{
    type: String,
  },
  website:{
    type: String,
  },
  profilePhoto:{
    type:String
  },
  email: {
    type: String,
    required: true
  },
  fbProviderId:{
    type: String,
  },
  githubProviderId:{
    type: String,
  },
  googleProviderId:{
    type: String,
  },
  createdEvents: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }
  ],
  status:{
    type: String,
  },
  termsLastAcceptedAt:{
    type:Date
  },
  lastSeen:{
    type:Date
  },
  isOnline:{
    type:Boolean
  }
},
{
  timestamps: true
});

module.exports = mongoose.model('UserProfile', userProfileSchema);

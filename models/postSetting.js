const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSettingSchema = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  notice:{
    type: String // on block
  }
},
{
  timestamps: true
});

module.exports = mongoose.model("PostSetting", postSettingSchema);

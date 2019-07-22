const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const termSchema = new Schema({
  name: {
    type: String
  },
  slug: {
    type: String
  },
  termGroup: {
    type: Number
  },
  status:{
    type: String,
  }
},
{
  timestamps: true
});

module.exports = mongoose.model("Term", termSchema);

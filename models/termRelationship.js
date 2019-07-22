const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const termRelationshipSchema = new Schema({
  termOrder: {
    type: Number
  },
  termTaxonomy:{
    type: Schema.Types.ObjectId,
    ref: 'TermTaxonomy'
  },
  post:{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  status:{
    type: String,
  }
},
{
  timestamps: true
});

module.exports = mongoose.model("TermRelationship", termRelationshipSchema);

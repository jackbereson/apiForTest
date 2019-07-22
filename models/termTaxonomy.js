const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const termTaxonomySchema = new Schema({
  taxonomy: {
    type: String
  },
  description: {
    type: String
  },
  parent: {
    type: Number
  },
  count: {
    type: Number
  },
  term:{
    type: Schema.Types.ObjectId,
    ref: 'Term'
  },
  status:{
    type: String,
  }
},
{
  timestamps: true
});

module.exports = mongoose.model("termTaxonomy", termTaxonomySchema);

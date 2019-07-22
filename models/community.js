const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const communitySchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    alias: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    url: {
      type: String
    },
    profilePhoto: {
      type: String
    },
    coverPhoto: {
      type: String
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category"
    },
    team: {
      type: Schema.Types.ObjectId,
      ref: "Team"
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    action: {
      type: String // read - join
    },
    status: {
      type: String //on off del - appr die report
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Community", communitySchema);

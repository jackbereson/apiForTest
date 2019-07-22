const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    exceprt: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    status: {
      type: String, //on off notice
      required: true
    },
    postType: {
      type: String
    },
    commentStatus: {
      type: String //approve normal notallow
    },
    postParent: {
      type: Schema.Types.ObjectId,
      ref: "Post"
    },
    like: {
      type: Number
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    channel: {
      type: Schema.Types.ObjectId,
      ref: "Channel"
    },
    comunity: {
      type: Schema.Types.ObjectId,
      ref: "Comunity"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", postSchema);

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true
    },
    parentComment: {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post"
    },
    status: {
      type: String //wait - on - off
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Comment", commentSchema);

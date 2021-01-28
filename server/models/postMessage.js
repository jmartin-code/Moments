import mongoose from "mongoose";

//create mongoose databse schema
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCounter: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//crete databse model
const PostMessage = mongoose.model("PostMessage", postSchema);

//export moongose model
export default PostMessage;

import mongoose from "mongoose";

//create mongoose databse schema
const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  message: { type: String, required: true },
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
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

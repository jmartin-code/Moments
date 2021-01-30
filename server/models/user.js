import mongoose from "mongoose";

//create mongoose databse schema for user
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

//create databse model
const User = mongoose.model("User", userSchema);

//export moongose model
export default User;

import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    //get all posts
    const postMessages = await PostMessage.find();
    // console.log(postMessages);

    //return 200 ok
    res.status(200).json(postMessages);
  } catch (err) {
    //return the error message
    res.status(404).json({ message: err.message });
  }
};

export const createPost = async (req, res) => {
  //extract post values
  const post = req.body;
  //create new post
  const newPost = new PostMessage(post);
  try {
    //save the new post
    await newPost.save();

    //response
    res.status(201).json(newPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that id");
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );
  res.json(updatePost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post with that id");
  }

  await PostMessage.findByIdAndRemove(id);
  // console.log("DELETE!!");
  res.json({ message: "Post was deleted" });
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  // const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post with that id");
  }

  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    {
      likeCounter: post.likeCounter + 1,
    },
    { new: true }
  );
  // console.log("LIKE!");
  res.json(updatedPost);
};

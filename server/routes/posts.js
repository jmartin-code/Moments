import express from "express";
import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

//import mongoose model
import PostMessage from "../models/postMessage.js";

const router = express.Router();

//Get
router.get("/", getPosts);
//Post
router.post("/", createPost);
//Update
router.patch("/:id", updatePost);
//Delete
router.delete("/:id", deletePost);
//Like post count
router.patch("/:id/likePost", likePost);

export default router;

import express from "express";
import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

import auth from "../middleware/auth.js";

const router = express.Router();

//Get
router.get("/", getPosts);
//Post
router.post("/", auth, createPost);
//Update
router.patch("/:id", auth, updatePost);
//Delete
router.delete("/:id", auth, deletePost);
//Like post count
router.patch("/:id/likePost", auth, likePost);

export default router;

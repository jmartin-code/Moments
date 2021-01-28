import axios from "axios";

//local url
const URL = "http://localhost:5000/posts";

//heroku url
// const URL = "https://moments-portfolio.herokuapp.com/posts";

//api to fetch all posts
export const fetchPosts = () => axios.get(URL);

//api to create post
export const createPost = (newPost) => axios.post(URL, newPost);

//api to update post
export const updatePost = (id, updatedPost) =>
  axios.patch(`${URL}/${id}`, updatedPost);

//api to delete post
export const deletePost = (id) => axios.delete(`${URL}/${id}`);

//api to update like count
export const likePost = (id) => axios.patch(`${URL}/${id}/likePost`);

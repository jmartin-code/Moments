import axios from "axios";

//axios instance
const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

//local url
// const URL = "http://localhost:5000/posts";

//heroku url
// const URL = "https://moments-portfolio.herokuapp.com/posts";

//api to fetch all posts
export const fetchPosts = () => API.get("/posts");

//api to create post
export const createPost = (newPost) => API.post("/posts", newPost);

//api to update post
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);

//api to delete post
export const deletePost = (id) => API.delete(`/posts/${id}`);

//api to update like count
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signin = (form) => API.post("/users/signin", form);
export const signup = (form) => API.post("/users/signup", form);

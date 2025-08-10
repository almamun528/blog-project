import { Router } from "express";
import {
  addBlog,
  deleteBlogById,
  generateContent,
  getAllBlogs,
  getBlogById,
  togglePublished,
} from "./blog.Controller.js";
import upload from "../../middleware/multer.js";
import auth from "../../middleware/auth.js";
import { addComment, getBlogComments } from "../comment/comment.controller.js";

const blogRoute = Router();
// !blog apis endPoint
blogRoute.post("/add/blog", upload.single("image"), auth, addBlog);
blogRoute.get("/read/blog", getAllBlogs);
blogRoute.get("/read/blog/:blogId", getBlogById);
blogRoute.delete("/delete/blog/:id", auth, deleteBlogById);
blogRoute.post("/update/status", auth, togglePublished);

//! apis endPoint for comments

blogRoute.post("/add-comment", addComment);
blogRoute.get("/comments", getBlogComments);
export default blogRoute;

// * Blog for Ai prompt

blogRoute.post("/generate", generateContent);

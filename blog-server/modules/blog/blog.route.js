import { Router } from "express";
import { addBlog } from "./blog.Controller.js";
import upload from "../../middleware/multer.js";
import auth from "../../middleware/auth.js";

const blogRoute = Router();

blogRoute.post("/add-blog", upload.single("image"), auth, addBlog);

export default blogRoute;
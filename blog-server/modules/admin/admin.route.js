import { Router } from "express";
import {
  adminLogin,
  approveCommentById,
  deleteCommentById,
  getAllBlogsAdmin,
  getAllComments,
  getDashboard,
} from "./admin.controller.js";
import auth from "../../middleware/auth.js";

const adminRoute = Router();

adminRoute.post("/admin-login", adminLogin);
adminRoute.get("/comments", auth, getAllComments);
adminRoute.get("/blogs", auth, getAllBlogsAdmin);
adminRoute.post("/delete-comment", auth, deleteCommentById);
adminRoute.post("/approve-comment", auth, approveCommentById);
adminRoute.get("/approve-comment", auth, getDashboard);

export default adminRoute;

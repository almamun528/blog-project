import { Router } from "express";
import adminRoute from "../modules/admin/admin.route.js";
import blogRoute from "../modules/blog/blog.route.js";

const router = Router();

router.use("/api", adminRoute);
router.use("/api", blogRoute);



export default router;

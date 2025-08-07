import { Router } from "express";
import adminRoute from "../modules/admin/admin.route.js";

const router = Router();

router.use("/api/admin-login", adminRoute);

export default router;
